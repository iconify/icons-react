import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eg3_8ibzz.css';
import '../../css/e/e9mzgf6-d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eg3_8ibzz"/><path class="e9mzgf6-d"/>`,
		"fallback": "material-icon-theme:folder-markdown-open",
	});
}

export default Component;
