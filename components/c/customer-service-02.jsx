import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/y4qn3mn9e.css';
import '../../css/m/mauw27bsx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="y4qn3mn9e"/><path class="mauw27bsx"/></g>`,
		"fallback": "hugeicons:customer-service-02",
	});
}

export default Component;
