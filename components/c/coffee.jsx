import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/v6dgvcb0v.css';
import '../../css/f/fcvp3_bsk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="v6dgvcb0v"/><path class="fcvp3_bsk"/></g>`,
		"fallback": "charm:coffee",
	});
}

export default Component;
