import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/e51ms8txy.css';
import '../../css/g/gl-auxbqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="e51ms8txy"/><path class="gl-auxbqc"/></g>`,
		"fallback": "hugeicons:bean",
	});
}

export default Component;
