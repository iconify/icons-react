import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hzkm26lyl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hzkm26lyl"/>`,
		"fallback": "garden:clipboard-blank-stroke-16",
	});
}

export default Component;
