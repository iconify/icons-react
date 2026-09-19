import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h8t72pbdn.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h8t72pbdn"/>`,
		"fallback": "codicon:circle-slash-compact",
	});
}

export default Component;
