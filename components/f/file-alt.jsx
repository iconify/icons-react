import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fnr30o6lz.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fnr30o6lz"/>`,
		"fallback": "fa-solid:file-alt",
	});
}

export default Component;
