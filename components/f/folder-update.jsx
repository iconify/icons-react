import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukvws-bxw.css';
import '../../css/y/ysc-gs3pu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ukvws-bxw"/><path class="ysc-gs3pu"/>`,
		"fallback": "material-icon-theme:folder-update",
	});
}

export default Component;
