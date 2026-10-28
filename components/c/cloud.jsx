import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xrw5sjivn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xrw5sjivn"/>`,
		"fallback": "codex:cloud",
	});
}

export default Component;
