import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/ob856wmpp.css';
import '../../css/k/k8-4ytbpp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ob856wmpp"/><path class="k8-4ytbpp"/></g>`,
		"fallback": "hugeicons:apple-pie",
	});
}

export default Component;
