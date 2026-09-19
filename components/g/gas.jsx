import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/u/u-8kx8qao.css';
import '../../css/t/t2t87mb4v.css';
import '../../css/c/c93p4rrcu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="u-8kx8qao"/><path class="t2t87mb4v"/><path class="c93p4rrcu"/></g>`,
		"fallback": "icon-park:gas",
	});
}

export default Component;
