import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ocxwenq6d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ocxwenq6d"/>`,
		"fallback": "file-icons:esdoc",
	});
}

export default Component;
