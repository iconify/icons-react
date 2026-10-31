import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/c/c2-vhivfe.css';
import '../../css/c/c9ar02bkm.css';
import '../../css/g/gxrw9vbxr.css';
import '../../css/f/f4or7pb1c.css';
import '../../css/r/rh9qoibkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="c2-vhivfe"/><path class="c9ar02bkm wm-shine"/><path class="gxrw9vbxr wm-k"/><path class="f4or7pb1c wm-a"/><path class="rh9qoibkn wm-deco"/></g>`,
		"fallback": "withicons-kawaii:handshake",
	});
}

export default Component;
