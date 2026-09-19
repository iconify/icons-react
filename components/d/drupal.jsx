import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rismambjt.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rismambjt"/>`,
		"fallback": "fa7-brands:drupal",
	});
}

export default Component;
