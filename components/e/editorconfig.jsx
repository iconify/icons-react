import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw1zs5b9h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iw1zs5b9h"/>`,
		"fallback": "file-icons:editorconfig",
	});
}

export default Component;
