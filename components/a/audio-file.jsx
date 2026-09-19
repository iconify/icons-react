import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flc3sop7r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="flc3sop7r"/>`,
		"fallback": "icons8:audio-file",
	});
}

export default Component;
