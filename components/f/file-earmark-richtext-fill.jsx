import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cmx57fb3h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cmx57fb3h"/>`,
		"fallback": "bi:file-earmark-richtext-fill",
	});
}

export default Component;
