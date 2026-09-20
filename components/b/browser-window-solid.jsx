import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zvl9obcpb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zvl9obcpb"/>`,
		"fallback": "rivet-icons:browser-window-solid",
	});
}

export default Component;
