import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n_p2jkb6u.css';
import '../../css/u/uipz879bh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="n_p2jkb6u"/><path class="uipz879bh"/></g>`,
		"fallback": "vadivam:eclipse",
	});
}

export default Component;
