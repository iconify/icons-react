import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p0_hr98mf.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p0_hr98mf"/>`,
		"fallback": "garden:arrow-left-sm-fill-12",
	});
}

export default Component;
