import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/x/x_q6ybc8x.css';
import '../../css/s/s33cwxgjz.css';
import '../../css/k/k6h1q8bpn.css';
import '../../css/x/x-rju-b-t.css';
import '../../css/r/ro6xbtbkg.css';
import '../../css/e/eck0kcbvu.css';
import '../../css/f/fyncz8bga.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="wm-shadow x_q6ybc8x"/><path class="s33cwxgjz"/><path class="k6h1q8bpn"/><path class="x-rju-b-t"/><path class="ro6xbtbkg"/><path class="eck0kcbvu wm-shine"/><path class="fyncz8bga wm-deco"/></g>`,
		"fallback": "withicons-sticker:avatar-frog",
	});
}

export default Component;
