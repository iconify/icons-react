import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ajt68wbjr.css';
import '../../css/c/cbvlg-uty.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ajt68wbjr"/><path class="cbvlg-uty"/></g>`,
		"fallback": "fluent-emoji-flat:bacon",
	});
}

export default Component;
