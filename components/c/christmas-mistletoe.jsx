import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/wj4kpac6w.css';
import '../../css/w/w_nswibwm.css';
import '../../css/p/p7p95v0fb.css';
import '../../css/d/djam5bcdb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(0 3)" class="n1lsf0bnc"><circle class="wj4kpac6w"/><ellipse class="w_nswibwm"/><ellipse class="p7p95v0fb"/><path class="djam5bcdb"/></g>`,
		"fallback": "si-glyph:christmas-mistletoe",
	});
}

export default Component;
