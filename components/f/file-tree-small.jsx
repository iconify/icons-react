import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ndk-6c8er.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ndk-6c8er"/>`,
		"fallback": "vaadin:file-tree-small",
	});
}

export default Component;
