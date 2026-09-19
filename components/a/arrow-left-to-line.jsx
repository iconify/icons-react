import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fm1g5qbio.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fm1g5qbio"/>`,
		"fallback": "gravity-ui:arrow-left-to-line",
	});
}

export default Component;
