import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bu0vtk99p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bu0vtk99p"/>`,
		"fallback": "la:bone",
	});
}

export default Component;
