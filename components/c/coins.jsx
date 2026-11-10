import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/f/fcpug8qfn.css';
import '../../css/i/i4gf_wb7q.css';
import '../../css/m/m_hxi5hql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="fcpug8qfn"/><path class="i4gf_wb7q"/><path class="m_hxi5hql"/></g>`,
		"fallback": "matita:coins",
	});
}

export default Component;
