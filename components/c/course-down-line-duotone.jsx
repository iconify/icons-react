import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/sg3ym4bwi.css';
import '../../css/f/f9l-rs01r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="sg3ym4bwi"/><path class="f9l-rs01r"/></g>`,
		"fallback": "solar:course-down-line-duotone",
	});
}

export default Component;
