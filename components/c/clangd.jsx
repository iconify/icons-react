import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c48zpqb1g.css';
import '../../css/a/ae2dujtsd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c48zpqb1g"/><path class="ae2dujtsd"/>`,
		"fallback": "material-icon-theme:clangd",
	});
}

export default Component;
