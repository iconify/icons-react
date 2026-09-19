import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/e/et-3szwqq.css';
import '../../css/w/wts3x0b9u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="et-3szwqq"/><path class="wts3x0b9u"/></g>`,
		"fallback": "hugeicons:ai-chemistry-02",
	});
}

export default Component;
