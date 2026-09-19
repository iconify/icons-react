import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zezc3ma4d.css';
import '../../css/x/xjh_mnkco.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zezc3ma4d"/><path class="xjh_mnkco"/></g>`,
		"fallback": "hugeicons:honour-star",
	});
}

export default Component;
