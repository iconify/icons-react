import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/e/esx2m_bgj.css';
import '../../css/k/kq63r2b2y.css';
import '../../css/h/hr0zsab8t.css';
import '../../css/b/bidljcb4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="esx2m_bgj"/><path class="kq63r2b2y"/><path class="hr0zsab8t"/><path class="bidljcb4r"/></g>`,
		"fallback": "matita:calendar",
	});
}

export default Component;
