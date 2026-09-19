import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bqqlflk3u.css';
import '../../css/z/zw9ur85fx.css';
import '../../css/t/tlhsqgbia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="bqqlflk3u"/><path class="zw9ur85fx"/><path class="tlhsqgbia"/></g>`,
		"fallback": "hugeicons:agreement-03",
	});
}

export default Component;
