import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ngpfvz0la.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ngpfvz0la"/>`,
		"fallback": "carbon:chart-line-data",
	});
}

export default Component;
