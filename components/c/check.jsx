import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/p/piudvvb6v.css';
import '../../css/r/rcxwt6bbg.css';
import '../../css/a/ajaqpvbas.css';
import '../../css/o/ou0fjm6nt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="piudvvb6v wm-shadow"/><path class="rcxwt6bbg wm-shadow"/><path class="ajaqpvbas"/><path class="ou0fjm6nt"/></g>`,
		"fallback": "withicons-brutal:check",
	});
}

export default Component;
