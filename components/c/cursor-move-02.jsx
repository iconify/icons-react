import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/e/eqf-k0brs.css';
import '../../css/n/nn7c872oa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="eqf-k0brs"/><path class="nn7c872oa"/></g>`,
		"fallback": "hugeicons:cursor-move-02",
	});
}

export default Component;
