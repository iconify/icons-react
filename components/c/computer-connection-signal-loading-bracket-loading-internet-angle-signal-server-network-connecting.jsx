import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/qwbn26bem.css';
import '../../css/s/s-d6dd6vi.css';
import '../../css/w/w94ahgb-l.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="qwbn26bem"/><circle class="s-d6dd6vi"/><circle class="w94ahgb-l"/></g>`,
		"fallback": "streamline:computer-connection-signal-loading-bracket-loading-internet-angle-signal-server-network-connecting",
	});
}

export default Component;
