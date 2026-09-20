import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/obyoxe9wk.css';
import '../../css/e/ey2vinn0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="obyoxe9wk"/><path class="ey2vinn0i"/></g>`,
		"fallback": "streamline-ultimate:delivery-package-person",
	});
}

export default Component;
