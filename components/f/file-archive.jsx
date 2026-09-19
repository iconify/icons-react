import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e8tesubav.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e8tesubav"/>`,
		"fallback": "fa-regular:file-archive",
	});
}

export default Component;
