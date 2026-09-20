import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdyeyv2or.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fdyeyv2or"/>`,
		"fallback": "maki:diamond",
	});
}

export default Component;
