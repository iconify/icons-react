import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/r/r9v6skglr.css';
import '../../css/a/apyn4nbgi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="r9v6skglr"/><path class="apyn4nbgi"/></g>`,
		"fallback": "humbleicons:folder-remove",
	});
}

export default Component;
