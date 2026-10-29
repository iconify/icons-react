import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/wzh0ixbqb.css';
import '../../css/m/mb8gb_27u.css';
import '../../css/j/j4e6xnbta.css';
import '../../css/e/elwqv4b4o.css';
import '../../css/j/jwwy0zbhd.css';
import '../../css/i/is550bbtp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="wm-shadow wzh0ixbqb"/><path class="mb8gb_27u"/><path class="j4e6xnbta"/><path class="elwqv4b4o"/><path class="jwwy0zbhd wm-shine"/><path class="is550bbtp wm-deco"/></g>`,
		"fallback": "withicons-sticker:columns",
	});
}

export default Component;
