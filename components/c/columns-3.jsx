import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/wzh0ixbqb.css';
import '../../css/m/mb8gb_27u.css';
import '../../css/s/s1f6ebbcx.css';
import '../../css/h/hf_8wexae.css';
import '../../css/j/jr929vbvi.css';
import '../../css/h/h4glz0b0d.css';
import '../../css/i/iifqig7rj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="wm-shadow wzh0ixbqb"/><path class="mb8gb_27u"/><path class="s1f6ebbcx"/><path class="hf_8wexae"/><path class="jr929vbvi wm-shine"/><path class="h4glz0b0d wm-deco"/><path class="iifqig7rj wm-deco"/></g>`,
		"fallback": "withicons-sticker:columns-3",
	});
}

export default Component;
