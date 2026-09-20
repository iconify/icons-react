import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrpu6pbds.css';
import '../../css/r/rw33ohb9x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nrpu6pbds"/><path class="rw33ohb9x"/>`,
		"fallback": "vaadin:google-plus-square",
	});
}

export default Component;
