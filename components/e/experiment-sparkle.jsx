import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i3hr2bc9y.css';
import '../../css/c/c3td-abmx.css';
import '../../css/s/svfwpgbum.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i3hr2bc9y"/><path class="c3td-abmx"/><path class="svfwpgbum"/></g>`,
		"fallback": "andrsrxn:experiment-sparkle",
	});
}

export default Component;
