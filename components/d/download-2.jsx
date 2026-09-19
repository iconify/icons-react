import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d5j_e6bga.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d5j_e6bga"/>`,
		"fallback": "icons8:download-2",
	});
}

export default Component;
