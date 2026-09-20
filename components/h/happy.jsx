import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/y/yujhm0l1u.css';
import '../../css/m/mvyfrqb8y.css';
import '../../css/d/dys8wbcuf.css';
import '../../css/b/b-kt9ugcc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><circle class="yujhm0l1u"/><path class="mvyfrqb8y"/><rect class="dys8wbcuf"/><rect class="b-kt9ugcc"/></g>`,
		"fallback": "lets-icons:happy",
	});
}

export default Component;
