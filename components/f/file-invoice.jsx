import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fzkptq_9i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fzkptq_9i"/>`,
		"fallback": "la:file-invoice",
	});
}

export default Component;
