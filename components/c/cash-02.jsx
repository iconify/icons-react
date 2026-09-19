import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/p2iw4076h.css';
import '../../css/b/bi_pd3nyo.css';
import '../../css/d/d53tfdb2r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="p2iw4076h"/><path class="bi_pd3nyo"/><path class="d53tfdb2r"/></g>`,
		"fallback": "hugeicons:cash-02",
	});
}

export default Component;
