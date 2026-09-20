import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uo1i1kbml.css';
import '../../css/f/frnq5ubeb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uo1i1kbml"/><path clip-rule="evenodd" class="frnq5ubeb"/></g>`,
		"fallback": "streamline-color:braille-blind-flat",
	});
}

export default Component;
