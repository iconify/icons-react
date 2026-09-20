import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukvws-bxw.css';
import '../../css/o/oyua62bvb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ukvws-bxw"/><path class="oyua62bvb"/>`,
		"fallback": "material-icon-theme:folder-repository",
	});
}

export default Component;
