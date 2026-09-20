import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u9rddobsf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u9rddobsf"/>`,
		"fallback": "la:file-export",
	});
}

export default Component;
