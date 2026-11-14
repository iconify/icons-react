import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/en3jfhbxq.css';
import '../../css/h/ho0h9qb5v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="en3jfhbxq"/><path class="ho0h9qb5v"/></g>`,
		"fallback": "hugeicons:dollar-square",
	});
}

export default Component;
