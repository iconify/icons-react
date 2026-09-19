import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aus8_o7lr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aus8_o7lr"/>`,
		"fallback": "carbon:chart-bullet",
	});
}

export default Component;
