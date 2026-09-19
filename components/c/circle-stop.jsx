import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ca_0qsbyw.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ca_0qsbyw"/>`,
		"fallback": "fluent-mdl2:circle-stop",
	});
}

export default Component;
