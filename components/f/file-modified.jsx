import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w4us--h_i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w4us--h_i"/>`,
		"fallback": "pajamas:file-modified",
	});
}

export default Component;
