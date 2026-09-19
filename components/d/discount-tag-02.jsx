import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/w/wav9d1b7u.css';
import '../../css/h/hubmzk9qp.css';
import '../../css/a/afwmemo5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="wav9d1b7u"/><path class="hubmzk9qp"/><path class="afwmemo5r"/></g>`,
		"fallback": "hugeicons:discount-tag-02",
	});
}

export default Component;
