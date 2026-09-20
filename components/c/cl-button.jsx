import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u4pj5jbdc.css';
import '../../css/i/in5wtwq8h.css';
import '../../css/f/f2smzy9kb.css';
import '../../css/e/e4zfowz9r.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u4pj5jbdc"/><path class="in5wtwq8h"/><path class="f2smzy9kb"/><path class="e4zfowz9r"/>`,
		"fallback": "openmoji:cl-button",
	});
}

export default Component;
