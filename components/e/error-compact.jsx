import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qkdog0g-k.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qkdog0g-k"/>`,
		"fallback": "codicon:error-compact",
	});
}

export default Component;
