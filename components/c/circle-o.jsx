import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e3iju5bzx.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e3iju5bzx"/>`,
		"fallback": "fa:circle-o",
	});
}

export default Component;
