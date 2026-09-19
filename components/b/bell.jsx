import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m2r-6absw.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m2r-6absw"/>`,
		"fallback": "fa7-regular:bell",
	});
}

export default Component;
