import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/frg06o3hi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="frg06o3hi"/>`,
		"fallback": "gravity-ui:arrow-shape-left-to-line",
	});
}

export default Component;
