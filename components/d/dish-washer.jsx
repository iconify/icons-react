import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/feqkhlenc.css';
import '../../css/m/m2rrqgazx.css';
import '../../css/r/rkoylwbig.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="feqkhlenc"/><path class="m2rrqgazx"/><path class="rkoylwbig"/></g>`,
		"fallback": "hugeicons:dish-washer",
	});
}

export default Component;
