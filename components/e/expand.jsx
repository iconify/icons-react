import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ka8nnc9vk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ka8nnc9vk"/>`,
		"fallback": "pajamas:expand",
	});
}

export default Component;
