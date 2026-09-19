import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a8y7n0fxr.css';

const viewBox = {"width":384,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a8y7n0fxr"/>`,
		"fallback": "ps:align-left",
	});
}

export default Component;
