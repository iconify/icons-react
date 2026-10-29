import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hxgi9p8-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hxgi9p8-o"/>`,
		"fallback": "withicons:corner-down-right-solid",
	});
}

export default Component;
