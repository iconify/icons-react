import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r0jalubpi.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r0jalubpi"/>`,
		"fallback": "garden:edit-redo-stroke-12",
	});
}

export default Component;
