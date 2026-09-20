import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oiu8l7b3m.css';
import '../../css/u/u_2rd8bgn.css';
import '../../css/n/nud7jhjqw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oiu8l7b3m"/><path class="u_2rd8bgn"/><path class="nud7jhjqw"/></g>`,
		"fallback": "streamline-color:graph-dot",
	});
}

export default Component;
