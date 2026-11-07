import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/u04hmj8af.css';
import '../../css/g/g4o4nebqu.css';
import '../../css/s/sr5bgubyr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="u04hmj8af"/><path class="g4o4nebqu"/><path class="sr5bgubyr"/></g>`,
		"fallback": "solar:bag-cross-linear",
	});
}

export default Component;
