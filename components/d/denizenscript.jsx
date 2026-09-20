import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jn37rnbrk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jn37rnbrk"/>`,
		"fallback": "material-icon-theme:denizenscript",
	});
}

export default Component;
