import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/veed-4b0i.css';
import '../../css/m/md286fbip.css';
import '../../css/f/ftenlc6zr.css';
import '../../css/i/i9csw2bee.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="veed-4b0i"/><g class="md286fbip"><path class="ftenlc6zr"/><path class="i9csw2bee"/></g></g>`,
		"fallback": "cryptocurrency-color:drgn",
	});
}

export default Component;
