import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/edf7zjbil.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="edf7zjbil"/>`,
		"fallback": "rivet-icons:eye-off",
	});
}

export default Component;
