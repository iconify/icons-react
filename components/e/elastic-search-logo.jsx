import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/z/ztedu_cxc.css';
import '../../css/p/p1pg8cmjs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="ztedu_cxc"/><path class="p1pg8cmjs"/></g>`,
		"fallback": "streamline-logos:elastic-search-logo",
	});
}

export default Component;
