import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ou22iob0a.css';
import '../../css/e/ea2i2zbkg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ou22iob0a"/><path class="ea2i2zbkg"/></g>`,
		"fallback": "iconamoon:dislike-light",
	});
}

export default Component;
