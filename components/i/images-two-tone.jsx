import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t05hsqxng.css';
import '../../css/k/kbxfhb-6c.css';
import '../../css/e/ed465-r6k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="t05hsqxng"/><path class="kbxfhb-6c"/><path class="ed465-r6k"/></g>`,
		"fallback": "keyline-icons:images-two-tone",
	});
}

export default Component;
