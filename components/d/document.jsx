import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fagn0tzgu.css';
import '../../css/x/x0r_ediec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fagn0tzgu"/><path class="x0r_ediec"/></g>`,
		"fallback": "codex:document",
	});
}

export default Component;
