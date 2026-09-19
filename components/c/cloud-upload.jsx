import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/llc3hsxpl.css';
import '../../css/j/j1alc3bdk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="llc3hsxpl"/><path class="j1alc3bdk"/>`,
		"fallback": "carbon:cloud-upload",
	});
}

export default Component;
