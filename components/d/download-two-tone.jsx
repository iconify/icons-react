import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j0054urrf.css';
import '../../css/b/budvl5y-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="j0054urrf"/><path class="budvl5y-x"/></g>`,
		"fallback": "keyline-icons:download-two-tone",
	});
}

export default Component;
