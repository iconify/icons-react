import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ly4ps1k1i.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ly4ps1k1i"/>`,
		"fallback": "fa7-solid:caret-down",
	});
}

export default Component;
