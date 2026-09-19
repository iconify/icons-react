import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/koa_941ji.css';
import '../../css/b/b3m01lz4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="koa_941ji"/><path class="b3m01lz4j"/></g>`,
		"fallback": "hugeicons:heart-pulse",
	});
}

export default Component;
