import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f7z7gccfy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f7z7gccfy"/>`,
		"fallback": "streamline:hierarchy-7-remix",
	});
}

export default Component;
