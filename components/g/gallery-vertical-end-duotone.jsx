import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/knf9qebnr.css';
import '../../css/s/slwoc8bcd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="knf9qebnr"/><path class="slwoc8bcd"/></g>`,
		"fallback": "keyline-icons:gallery-vertical-end-duotone",
	});
}

export default Component;
