import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oi19z5bud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oi19z5bud"/>`,
		"fallback": "mage:home-4-fill",
	});
}

export default Component;
