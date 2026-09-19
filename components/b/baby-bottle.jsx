import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/r9j_lbbqt.css';
import '../../css/t/tpcok78oa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="r9j_lbbqt"/><path class="tpcok78oa"/></g>`,
		"fallback": "hugeicons:baby-bottle",
	});
}

export default Component;
