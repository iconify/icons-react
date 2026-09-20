import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/o0p9msdnj.css';
import '../../css/s/s16ql1f_q.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="o0p9msdnj"/><path class="s16ql1f_q"/></g>`,
		"fallback": "streamline:inbox-block",
	});
}

export default Component;
