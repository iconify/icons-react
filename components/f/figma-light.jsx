import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wbec9fl-o.css';
import '../../css/q/qcxpfgbgl.css';
import '../../css/i/i-k_57oki.css';
import '../../css/e/eux5nikfz.css';
import '../../css/y/y0zkh2w_l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wbec9fl-o"/><path class="qcxpfgbgl"/><circle class="i-k_57oki"/><path class="eux5nikfz"/><path class="y0zkh2w_l"/>`,
		"fallback": "selfhst:figma-light",
	});
}

export default Component;
