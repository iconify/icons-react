import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c55vgcbjc.css';
import '../../css/h/h7v4f1b-l.css';
import '../../css/c/cyoweacxi.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c55vgcbjc"/><path class="h7v4f1b-l"/><path class="cyoweacxi"/>`,
		"fallback": "carbon:checkmark-filled-error",
	});
}

export default Component;
