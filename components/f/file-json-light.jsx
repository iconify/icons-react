import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q9oef4b5x.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q9oef4b5x"/>`,
		"fallback": "pullo:file-json-light",
	});
}

export default Component;
