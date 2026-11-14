import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/uqkfw-bek.css';
import '../../css/o/oq9456kmp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="uqkfw-bek"/><path class="oq9456kmp"/></g>`,
		"fallback": "hugeicons:artificial-intelligence-04",
	});
}

export default Component;
