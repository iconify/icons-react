import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/r61vi9dqe.css';
import '../../css/u/u9jd1wvuv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="r61vi9dqe"/><path class="u9jd1wvuv"/></g>`,
		"fallback": "hugeicons:candy-off",
	});
}

export default Component;
