import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/oozf-34aj.css';
import '../../css/u/ucq6e0a7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="oozf-34aj"/><path class="ucq6e0a7d"/></g>`,
		"fallback": "proicons:directions",
	});
}

export default Component;
