import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ifk-i5r3v.css';
import '../../css/b/btqq080xb.css';
import '../../css/v/vkjbxxorz.css';
import '../../css/a/a98qbdbjk.css';
import '../../css/t/t5jn33bdv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ifk-i5r3v"/><path class="btqq080xb"/><path class="vkjbxxorz"/><path class="a98qbdbjk"/><path class="t5jn33bdv"/></g>`,
		"fallback": "fluent-emoji-flat:hamster",
	});
}

export default Component;
