import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jq3ztmbcu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jq3ztmbcu"/>`,
		"fallback": "cib:aurelia",
	});
}

export default Component;
