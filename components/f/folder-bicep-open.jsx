import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y1o01ybqh.css';
import '../../css/w/w085iof8r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y1o01ybqh"/><path class="w085iof8r"/>`,
		"fallback": "material-icon-theme:folder-bicep-open",
	});
}

export default Component;
