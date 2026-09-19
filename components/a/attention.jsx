import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x733y_y1a.css';
import '../../css/v/v33nqph3n.css';
import '../../css/j/jjgbwem1c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x733y_y1a"/><path clip-rule="evenodd" class="v33nqph3n"/><path class="jjgbwem1c"/></g>`,
		"fallback": "icon-park-outline:attention",
	});
}

export default Component;
