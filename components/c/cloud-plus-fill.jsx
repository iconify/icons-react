import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pcyw3wb9g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pcyw3wb9g"/>`,
		"fallback": "bi:cloud-plus-fill",
	});
}

export default Component;
