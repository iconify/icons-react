import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/x/xglklabzt.css';
import '../../css/q/q1m15dbht.css';
import '../../css/n/n08atmnqs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><circle class="xglklabzt"/><circle class="q1m15dbht"/><path class="n08atmnqs"/></g>`,
		"fallback": "bitcoin-icons:buoy-outline",
	});
}

export default Component;
