import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hecxz1a6q.css';
import '../../css/e/ebeckoi3c.css';
import '../../css/i/if6_7mb5p.css';
import '../../css/u/ut1eaac0p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hecxz1a6q"/><path class="ebeckoi3c"/><path class="if6_7mb5p"/><path class="ut1eaac0p"/></g>`,
		"fallback": "streamline-color:button-rewind-1",
	});
}

export default Component;
