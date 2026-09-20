import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/tr2xv6b0l.css';
import '../../css/v/v_yykcbww.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="tr2xv6b0l"/><path class="v_yykcbww"/></g>`,
		"fallback": "streamline:information-circle",
	});
}

export default Component;
