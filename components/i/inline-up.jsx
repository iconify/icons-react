import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i90gq365a.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i90gq365a"/>`,
		"fallback": "quill:inline-up",
	});
}

export default Component;
