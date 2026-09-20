import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/yph-txb3i.css';
import '../../css/e/et8xsmtoj.css';
import '../../css/q/qvegwobbw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="yph-txb3i"/><path class="et8xsmtoj"/><path class="qvegwobbw"/></g>`,
		"fallback": "streamline:computer-keyboard-return-3-enter-return-keyboard",
	});
}

export default Component;
