import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iz46qppul.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="iz46qppul"/>`,
		"fallback": "pepicons-pencil:circle-big",
	});
}

export default Component;
