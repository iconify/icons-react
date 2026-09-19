import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ozy7hsv8f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ozy7hsv8f"/>`,
		"fallback": "bi:floppy2",
	});
}

export default Component;
