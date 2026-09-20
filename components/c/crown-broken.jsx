import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fmxtri8zf.css';
import '../../css/v/vnjc76_8o.css';
import '../../css/w/wzyky7bnb.css';
import '../../css/m/m_rmalbye.css';
import '../../css/v/vi6xztbsq.css';
import '../../css/v/vh5fdjbhi.css';
import '../../css/x/xhsqmdbch.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="fmxtri8zf"/><path class="vnjc76_8o"/><path class="wzyky7bnb"/><path class="m_rmalbye"/><path class="vi6xztbsq"/><path class="vh5fdjbhi"/><path class="xhsqmdbch"/></g>`,
		"fallback": "solar:crown-broken",
	});
}

export default Component;
