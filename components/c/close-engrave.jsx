import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/e2hwfubct.css';
import '../../css/l/l-cphhs4g.css';
import '../../css/z/zl-i7yb9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="e2hwfubct"/><path class="l-cphhs4g wm-shadow"/><path class="zl-i7yb9j"/></g>`,
		"fallback": "withicons:close-engrave",
	});
}

export default Component;
