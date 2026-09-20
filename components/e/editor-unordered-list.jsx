import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b08klq9nj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b08klq9nj"/>`,
		"fallback": "oui:editor-unordered-list",
	});
}

export default Component;
