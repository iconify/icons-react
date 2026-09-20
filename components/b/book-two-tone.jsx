import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a2a004bjj.css';
import '../../css/l/lgvrkqbtp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="a2a004bjj"/><path class="lgvrkqbtp"/></g>`,
		"fallback": "keyline-icons:book-two-tone",
	});
}

export default Component;
