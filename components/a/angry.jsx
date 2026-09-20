import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/y/yujhm0l1u.css';
import '../../css/r/r2dhyablu.css';
import '../../css/r/r37wzc_th.css';
import '../../css/g/g_5lohbcu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><circle class="yujhm0l1u"/><path class="r2dhyablu"/><circle class="r37wzc_th"/><circle class="g_5lohbcu"/></g>`,
		"fallback": "lets-icons:angry",
	});
}

export default Component;
