import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/z/z56x009ot.css';
import '../../css/e/ehvd5xbqh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="z56x009ot"/><path class="ehvd5xbqh"/></g>`,
		"fallback": "matita:egg",
	});
}

export default Component;
