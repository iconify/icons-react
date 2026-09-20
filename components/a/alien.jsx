import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s2eseab_l.css';
import '../../css/n/ncy81xx2g.css';
import '../../css/h/he1a_4bte.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/z/z8fn4_1bf.css';
import '../../css/m/m4p-srizu.css';
import '../../css/d/d7xaxnx8j.css';
import '../../css/t/t-zky5dck.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s2eseab_l"/><path class="ncy81xx2g"/><path class="he1a_4bte"/><g class="brzn_0bpr"><path class="z8fn4_1bf"/><path class="m4p-srizu"/><path class="d7xaxnx8j"/><path class="t-zky5dck"/></g>`,
		"fallback": "openmoji:alien",
	});
}

export default Component;
