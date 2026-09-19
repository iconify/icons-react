import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jjamo2zjs.css';
import '../../css/u/uyj_wk24z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="jjamo2zjs"/><path class="uyj_wk24z"/></g>`,
		"fallback": "hugeicons:house-01",
	});
}

export default Component;
