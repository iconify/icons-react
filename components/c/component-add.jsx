import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k9g8caczj.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k9g8caczj"/>`,
		"fallback": "system-uicons:component-add",
	});
}

export default Component;
