import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nsdfu7yhp.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/f/f0o4osb6u.css';
import '../../css/q/qu_nu0rme.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nsdfu7yhp"/><g class="mc2zb0bvp"><path class="f0o4osb6u"/><path class="qu_nu0rme"/></g></g>`,
		"fallback": "struq:follow-up",
	});
}

export default Component;
