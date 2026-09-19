import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y8wbxwy2x.css';
import '../../css/c/clxvp5dwo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y8wbxwy2x"/><path class="clxvp5dwo"/>`,
		"fallback": "heroicons:chart-pie-16-solid",
	});
}

export default Component;
