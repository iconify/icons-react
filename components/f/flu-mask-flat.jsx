import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/utau-8bnp.css';
import '../../css/s/sre57jb1n.css';
import '../../css/o/oqnyozb4u.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="utau-8bnp"/><path class="sre57jb1n"/><path clip-rule="evenodd" class="oqnyozb4u"/></g>`,
		"fallback": "streamline-color:flu-mask-flat",
	});
}

export default Component;
