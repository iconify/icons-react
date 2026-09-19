import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c55vgcbjc.css';
import '../../css/n/n-obmabwf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c55vgcbjc"/><path class="n-obmabwf"/>`,
		"fallback": "carbon:in-progress-error",
	});
}

export default Component;
