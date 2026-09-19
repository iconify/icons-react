import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ru8mpqtzq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ru8mpqtzq"/>`,
		"fallback": "garden:file-pdf-fill-16",
	});
}

export default Component;
