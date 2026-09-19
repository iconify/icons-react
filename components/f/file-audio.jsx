import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jztbvhf1e.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jztbvhf1e"/>`,
		"fallback": "fa-solid:file-audio",
	});
}

export default Component;
