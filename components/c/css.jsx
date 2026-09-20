import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fejgivb_d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fejgivb_d"/>`,
		"fallback": "rivet-icons:css",
	});
}

export default Component;
