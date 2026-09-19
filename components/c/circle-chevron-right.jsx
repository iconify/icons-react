import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/g9bey28zn.css';
import '../../css/k/k426tnb4q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="g9bey28zn"/><path class="k426tnb4q"/></g>`,
		"fallback": "hugeicons:circle-chevron-right",
	});
}

export default Component;
