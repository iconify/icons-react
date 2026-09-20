import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aylyh4brw.css';
import '../../css/m/m6x3_sbrd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aylyh4brw"/><path class="m6x3_sbrd"/>`,
		"fallback": "material-icon-theme:folder-svg-open",
	});
}

export default Component;
