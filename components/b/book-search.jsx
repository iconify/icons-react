import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zgu2rvdku.css';
import '../../css/l/lp8rlibep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zgu2rvdku"/><path class="lp8rlibep"/></g>`,
		"fallback": "hugeicons:book-search",
	});
}

export default Component;
