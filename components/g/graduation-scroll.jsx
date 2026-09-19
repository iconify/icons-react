import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/kddnubb0l.css';
import '../../css/v/v5x384kor.css';
import '../../css/b/bnkzc605v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="kddnubb0l"/><path class="v5x384kor"/><path class="bnkzc605v"/></g>`,
		"fallback": "hugeicons:graduation-scroll",
	});
}

export default Component;
