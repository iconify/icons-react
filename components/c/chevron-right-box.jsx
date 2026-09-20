import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dz9m3nbzy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dz9m3nbzy"/>`,
		"fallback": "mdi:chevron-right-box",
	});
}

export default Component;
