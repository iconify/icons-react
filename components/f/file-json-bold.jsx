import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-v-bsb3t.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k-v-bsb3t"/>`,
		"fallback": "pullo:file-json-bold",
	});
}

export default Component;
