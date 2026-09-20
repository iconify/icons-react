import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/h/hh29bx8re.css';
import '../../css/q/qr439k5ha.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="hh29bx8re"/><path class="qr439k5ha"/></g>`,
		"fallback": "streamline-flex:bicycle-bike",
	});
}

export default Component;
