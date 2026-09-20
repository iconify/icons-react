import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sedqzzbdh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sedqzzbdh"/>`,
		"fallback": "rivet-icons:ellipsis-vertical",
	});
}

export default Component;
