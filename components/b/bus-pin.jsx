import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i5kxfj88d.css';
import '../../css/c/ct7-_09nf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="i5kxfj88d"/><path class="ct7-_09nf"/></g>`,
		"fallback": "tabler:bus-pin",
	});
}

export default Component;
