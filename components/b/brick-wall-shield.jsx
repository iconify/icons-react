import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/u8zk_ogia.css';
import '../../css/x/xnhyfxxio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="u8zk_ogia"/><path class="xnhyfxxio"/></g>`,
		"fallback": "hugeicons:brick-wall-shield",
	});
}

export default Component;
