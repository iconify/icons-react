import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h8pvc7bdh.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h8pvc7bdh"/>`,
		"fallback": "fa6-solid:fire-flame-curved",
	});
}

export default Component;
