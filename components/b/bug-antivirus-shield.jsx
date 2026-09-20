import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/o5eu2wx-n.css';
import '../../css/w/wrw9y9b3o.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="o5eu2wx-n"/><path class="wrw9y9b3o"/></g>`,
		"fallback": "streamline:bug-antivirus-shield",
	});
}

export default Component;
