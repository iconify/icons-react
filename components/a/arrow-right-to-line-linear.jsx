import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/tgvfhnabb.css';
import '../../css/u/ue8ht3b0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="tgvfhnabb"/><path class="ue8ht3b0f"/></g>`,
		"fallback": "solar:arrow-right-to-line-linear",
	});
}

export default Component;
