import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yau819bof.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yau819bof"/>`,
		"fallback": "noviair-light:grip",
	});
}

export default Component;
