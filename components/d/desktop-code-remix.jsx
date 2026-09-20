import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zobuk4bvj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zobuk4bvj"/>`,
		"fallback": "streamline:desktop-code-remix",
	});
}

export default Component;
