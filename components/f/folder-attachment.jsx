import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/g1b00jbvb.css';
import '../../css/e/e-o-j5gyn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="g1b00jbvb"/><path class="e-o-j5gyn"/></g>`,
		"fallback": "hugeicons:folder-attachment",
	});
}

export default Component;
