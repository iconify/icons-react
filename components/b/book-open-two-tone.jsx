import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sn9e1xb8l.css';
import '../../css/y/y29sbojzs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="sn9e1xb8l"/><path class="y29sbojzs"/></g>`,
		"fallback": "keyline-icons:book-open-two-tone",
	});
}

export default Component;
