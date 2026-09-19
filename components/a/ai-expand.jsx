import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gx-8gccxv.css';
import '../../css/h/hh2dj9bdi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gx-8gccxv"/><path class="hh2dj9bdi"/></g>`,
		"fallback": "hugeicons:ai-expand",
	});
}

export default Component;
