import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fod8rqkic.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fod8rqkic"/>`,
		"fallback": "bi:file-font-fill",
	});
}

export default Component;
