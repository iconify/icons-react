import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ir7olpafp.css';
import '../../css/q/qfbfm5pbk.css';
import '../../css/j/jn_1-kbwn.css';
import '../../css/m/mzfoi9l1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ir7olpafp"/><path class="qfbfm5pbk"/><path class="jn_1-kbwn"/><path clip-rule="evenodd" class="mzfoi9l1e"/>`,
		"fallback": "solar:download-twice-square-outline",
	});
}

export default Component;
