import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sdu8ar_ju.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sdu8ar_ju"/>`,
		"fallback": "la:file-upload",
	});
}

export default Component;
