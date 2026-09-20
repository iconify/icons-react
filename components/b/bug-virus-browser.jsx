import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/jc5uybcwy.css';
import '../../css/a/a2wyx2aau.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="jc5uybcwy"/><path class="a2wyx2aau"/></g>`,
		"fallback": "streamline:bug-virus-browser",
	});
}

export default Component;
