import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w-4zo-uap.css';
import '../../css/a/aoxojqb6d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w-4zo-uap"/><path class="aoxojqb6d"/>`,
		"fallback": "material-icon-theme:folder-delta-open",
	});
}

export default Component;
