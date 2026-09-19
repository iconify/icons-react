import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/r/r9v6skglr.css';
import '../../css/r/r3rbp8bmw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="r9v6skglr"/><path class="r3rbp8bmw"/></g>`,
		"fallback": "humbleicons:folder-add",
	});
}

export default Component;
