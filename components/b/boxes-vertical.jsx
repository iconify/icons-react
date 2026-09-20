import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wa-00nb1u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wa-00nb1u"/>`,
		"fallback": "oui:boxes-vertical",
	});
}

export default Component;
