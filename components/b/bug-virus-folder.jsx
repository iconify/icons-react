import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/x70eatbvf.css';
import '../../css/g/g-qrs41pw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="x70eatbvf"/><path class="g-qrs41pw"/></g>`,
		"fallback": "streamline:bug-virus-folder",
	});
}

export default Component;
