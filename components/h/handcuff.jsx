import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/dq8d4dbot.css';
import '../../css/t/tkiwk1b_f.css';

const viewBox = {"width":16,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="dq8d4dbot"/><path class="tkiwk1b_f"/></g>`,
		"fallback": "si-glyph:handcuff",
	});
}

export default Component;
