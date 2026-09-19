import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wu8rf9bvt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wu8rf9bvt"/>`,
		"fallback": "garden:face-neutral-stroke-16",
	});
}

export default Component;
