import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/htfmkmsgd.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="htfmkmsgd"/>`,
		"fallback": "system-uicons:check",
	});
}

export default Component;
