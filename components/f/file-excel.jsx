import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lgwwk6bzf.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lgwwk6bzf"/>`,
		"fallback": "fa7-solid:file-excel",
	});
}

export default Component;
