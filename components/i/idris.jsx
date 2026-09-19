import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kmwr7vi-w.css';

const viewBox = {"width":279,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kmwr7vi-w"/>`,
		"fallback": "file-icons:idris",
	});
}

export default Component;
