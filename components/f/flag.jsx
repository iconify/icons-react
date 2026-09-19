import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oebu9o-lf.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oebu9o-lf"/>`,
		"fallback": "fa7-regular:flag",
	});
}

export default Component;
