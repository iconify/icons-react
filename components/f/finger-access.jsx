import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/czd7etboj.css';
import '../../css/i/ihar8za-j.css';
import '../../css/d/dq9es6cpd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="czd7etboj"/><path class="ihar8za-j"/><path class="dq9es6cpd"/></g>`,
		"fallback": "hugeicons:finger-access",
	});
}

export default Component;
