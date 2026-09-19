import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a4xvac4ek.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a4xvac4ek"/>`,
		"fallback": "at-icons:cube",
	});
}

export default Component;
