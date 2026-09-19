import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hsth7bq1k.css';

const viewBox = {"width":750,"height":800};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hsth7bq1k"/>`,
		"fallback": "il:cup",
	});
}

export default Component;
