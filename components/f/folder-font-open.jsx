import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v702yrfnr.css';
import '../../css/z/zji159b5d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v702yrfnr"/><path class="zji159b5d"/>`,
		"fallback": "material-icon-theme:folder-font-open",
	});
}

export default Component;
