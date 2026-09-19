import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hdy0uobbu.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hdy0uobbu"/>`,
		"fallback": "fa6-solid:file-audio",
	});
}

export default Component;
