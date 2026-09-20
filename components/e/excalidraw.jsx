import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e4bstkz6q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e4bstkz6q"/>`,
		"fallback": "material-icon-theme:excalidraw",
	});
}

export default Component;
