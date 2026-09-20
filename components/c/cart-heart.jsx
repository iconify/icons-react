import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aoerowm3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aoerowm3d"/>`,
		"fallback": "mdi:cart-heart",
	});
}

export default Component;
