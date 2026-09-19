import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rfkvhqt6m.css';
import '../../css/d/dwkradbje.css';
import '../../css/q/q94wnnbrx.css';
import '../../css/c/ch3kt3fvc.css';

const viewBox = {"width":49,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rfkvhqt6m"/><path class="dwkradbje"/><path class="q94wnnbrx"/><path class="ch3kt3fvc"/></g>`,
		"fallback": "icon-park:bowling",
	});
}

export default Component;
