import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d86d3il-r.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d86d3il-r"/>`,
		"fallback": "fa6-regular:file-video",
	});
}

export default Component;
