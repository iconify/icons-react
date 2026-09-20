import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qdua9vbrn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qdua9vbrn"/>`,
		"fallback": "ix:editor-grid",
	});
}

export default Component;
