import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/k/kw56s29xw.css';
import '../../css/c/c-gz8da_u.css';
import '../../css/k/kxufwstrq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="kw56s29xw"/><path class="c-gz8da_u"/><path class="kxufwstrq"/></g>`,
		"fallback": "hugeicons:ice-hockey",
	});
}

export default Component;
