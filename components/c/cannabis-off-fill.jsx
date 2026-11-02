import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gmg_78b-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gmg_78b-o"/>`,
		"fallback": "mingcute:cannabis-off-fill",
	});
}

export default Component;
