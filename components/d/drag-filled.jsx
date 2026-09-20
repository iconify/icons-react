import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xuh3r0bvc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xuh3r0bvc"/>`,
		"fallback": "lsicon:drag-filled",
	});
}

export default Component;
