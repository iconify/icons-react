import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oefg2-ghd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oefg2-ghd"/>`,
		"fallback": "nimbus:calendar",
	});
}

export default Component;
