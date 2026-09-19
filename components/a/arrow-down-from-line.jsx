import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrwdudb7a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nrwdudb7a"/>`,
		"fallback": "at-icons:arrow-down-from-line",
	});
}

export default Component;
