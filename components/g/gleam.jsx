import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zvkoc4bjh.css';
import '../../css/d/ddfstw25s.css';
import '../../css/y/yf15yqbyv.css';
import '../../css/e/exrb9kblz.css';
import '../../css/r/r4khun_1o.css';
import '../../css/x/x2e9vjbcf.css';

const viewBox = {"width":2000,"height":1915};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zvkoc4bjh"/><g class="ddfstw25s"><path class="yf15yqbyv"/><circle class="exrb9kblz"/><circle class="r4khun_1o"/><path class="x2e9vjbcf"/></g>`,
		"fallback": "thesvg-color:gleam",
	});
}

export default Component;
