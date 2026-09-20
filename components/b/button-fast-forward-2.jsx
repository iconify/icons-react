import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/dtgs-z5qn.css';
import '../../css/t/tfb6w2rqt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="dtgs-z5qn"/><path class="tfb6w2rqt"/></g>`,
		"fallback": "streamline:button-fast-forward-2",
	});
}

export default Component;
