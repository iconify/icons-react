import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_5qddr-h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k_5qddr-h"/>`,
		"fallback": "gravity-ui:bars-ascending-align-left",
	});
}

export default Component;
