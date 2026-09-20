import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ivg8c9bmh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ivg8c9bmh"/>`,
		"fallback": "pajamas:earth",
	});
}

export default Component;
