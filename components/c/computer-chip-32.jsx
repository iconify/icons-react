import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uya7-zeom.css';
import '../../css/k/kxzfxib7s.css';
import '../../css/f/f-wy3n-mo.css';
import '../../css/w/ww0o_lbhh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uya7-zeom"/><path class="kxzfxib7s"/><path class="f-wy3n-mo"/><path class="ww0o_lbhh"/></g>`,
		"fallback": "streamline-ultimate-color:computer-chip-32",
	});
}

export default Component;
