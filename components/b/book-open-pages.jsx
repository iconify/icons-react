import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gx2s9gbmw.css';
import '../../css/l/l675vybow.css';
import '../../css/u/u7vx7wf8m.css';
import '../../css/n/njui45b0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gx2s9gbmw"/><path class="l675vybow"/><path class="u7vx7wf8m"/><path class="njui45b0b"/></g>`,
		"fallback": "andrsrxn:book-open-pages",
	});
}

export default Component;
