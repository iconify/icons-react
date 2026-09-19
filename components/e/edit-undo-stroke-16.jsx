import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o51njj7bl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o51njj7bl"/>`,
		"fallback": "garden:edit-undo-stroke-16",
	});
}

export default Component;
