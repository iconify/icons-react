import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/cql1pwtbp.css';
import '../../css/u/ufl3gnb8l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="cql1pwtbp"/><path class="ufl3gnb8l"/></g>`,
		"fallback": "hugeicons:blinds",
	});
}

export default Component;
