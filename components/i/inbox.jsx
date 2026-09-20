import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iu5d3vb7i.css';
import '../../css/b/bp_65ywhg.css';
import '../../css/u/uxrthobgk.css';
import '../../css/c/cx-3tnvsf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iu5d3vb7i"/><path class="bp_65ywhg"/><path class="uxrthobgk"/><path class="cx-3tnvsf"/></g>`,
		"fallback": "streamline-flex-color:inbox",
	});
}

export default Component;
