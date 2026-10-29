import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/s/s0-f6jbef.css';
import '../../css/n/ntk3jn1az.css';
import '../../css/j/j5d60cbfx.css';
import '../../css/q/qo7p5zbah.css';
import '../../css/m/msgc-vpdh.css';
import '../../css/m/mbnc57bbm.css';
import '../../css/r/rvy7lacij.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="s0-f6jbef wm-deco"/><path class="ntk3jn1az wm-deco"/><path class="j5d60cbfx wm-deco"/><path class="qo7p5zbah wm-k"/><path class="msgc-vpdh wm-a"/><path class="mbnc57bbm wm-k"/><path class="rvy7lacij wm-a"/></g>`,
		"fallback": "withicons:handshake-blueprint",
	});
}

export default Component;
