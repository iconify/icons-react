import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nruagvb1s.css';
import '../../css/a/aoxojqb6d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nruagvb1s"/><path class="aoxojqb6d"/>`,
		"fallback": "material-icon-theme:folder-delta",
	});
}

export default Component;
