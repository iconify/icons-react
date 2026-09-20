import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/qsyybeb2t.css';
import '../../css/w/wx83_yb_i.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="qsyybeb2t"/><path class="wx83_yb_i"/></g>`,
		"fallback": "streamline:download-computer",
	});
}

export default Component;
