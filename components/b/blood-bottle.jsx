import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/qorhmmb2p.css';
import '../../css/p/pe7dhubax.css';
import '../../css/s/sxlhkwblw.css';
import '../../css/s/skr4s9e3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="qorhmmb2p"/><path class="pe7dhubax"/><path class="sxlhkwblw"/><path class="skr4s9e3m"/></g>`,
		"fallback": "hugeicons:blood-bottle",
	});
}

export default Component;
