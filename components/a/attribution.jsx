import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/r/rmoj74yqa.css';
import '../../css/n/n-00fobag.css';
import '../../css/q/qm5u1e9nw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="rmoj74yqa"/><path class="n-00fobag"/><path class="qm5u1e9nw"/></g>`,
		"fallback": "streamline:attribution",
	});
}

export default Component;
