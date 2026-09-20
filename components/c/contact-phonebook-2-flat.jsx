import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iu1cg4blf.css';
import '../../css/c/c9363t02o.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iu1cg4blf"/><path class="c9363t02o"/></g>`,
		"fallback": "streamline-flex-color:contact-phonebook-2-flat",
	});
}

export default Component;
