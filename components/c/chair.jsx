import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tr_ojxbiy.css';
import '../../css/n/nr6iob5xa.css';
import '../../css/j/jv7dyx2xs.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/y/yyyukfddm.css';
import '../../css/k/kljvqjkjf.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tr_ojxbiy"/><path class="nr6iob5xa"/><path class="jv7dyx2xs"/><g class="brzn_0bpr"><path class="yyyukfddm"/><path class="kljvqjkjf"/></g>`,
		"fallback": "openmoji:chair",
	});
}

export default Component;
