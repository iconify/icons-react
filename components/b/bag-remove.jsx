import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/pun70et_r.css';
import '../../css/s/s-qon6-ac.css';
import '../../css/c/c5iba_rmv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="pun70et_r"/><path class="s-qon6-ac"/><path class="c5iba_rmv"/></g>`,
		"fallback": "si-glyph:bag-remove",
	});
}

export default Component;
