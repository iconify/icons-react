import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o244-4_zh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o244-4_zh"/>`,
		"fallback": "reicon:history3-filled",
	});
}

export default Component;
