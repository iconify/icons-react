import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cd1m6pb_c.css';
import '../../css/z/z2-gbos-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cd1m6pb_c"/><path class="z2-gbos-e"/></g>`,
		"fallback": "keyline-icons:database-two-tone",
	});
}

export default Component;
