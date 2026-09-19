import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/azq1udcyj.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="azq1udcyj"/>`,
		"fallback": "fa7-brands:gofore",
	});
}

export default Component;
