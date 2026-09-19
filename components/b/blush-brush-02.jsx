import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/s/s9jnzj0bb.css';
import '../../css/q/qgb6gq_lf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="s9jnzj0bb"/><path class="qgb6gq_lf"/></g>`,
		"fallback": "hugeicons:blush-brush-02",
	});
}

export default Component;
