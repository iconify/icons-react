import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bkk9s6t1w.css';
import '../../css/j/jr75yzbwa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="bkk9s6t1w"/><path class="jr75yzbwa"/></g>`,
		"fallback": "streamline-plump-color:beer-pitch-flat",
	});
}

export default Component;
