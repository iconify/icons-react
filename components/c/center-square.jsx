import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cv0wkklle.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cv0wkklle"/>`,
		"fallback": "carbon:center-square",
	});
}

export default Component;
