import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j51w7z-wj.css';
import '../../css/e/edf-x6box.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j51w7z-wj"/><path class="edf-x6box"/>`,
		"fallback": "vaadin:arrow-circle-down-o",
	});
}

export default Component;
