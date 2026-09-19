import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cafiwfqjv.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cafiwfqjv"/>`,
		"fallback": "fa6-solid:copy",
	});
}

export default Component;
