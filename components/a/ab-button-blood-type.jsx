import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxwyqi2jz.css';
import '../../css/i/in5wtwq8h.css';
import '../../css/x/xan4wqb6p.css';
import '../../css/e/e4zfowz9r.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fxwyqi2jz"/><path class="in5wtwq8h"/><path class="xan4wqb6p"/><path class="e4zfowz9r"/>`,
		"fallback": "openmoji:ab-button-blood-type",
	});
}

export default Component;
