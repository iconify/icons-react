import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/onbnhhb6h.css';
import '../../css/v/vilqbrbet.css';
import '../../css/c/c8b73tuui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="onbnhhb6h"/><path class="vilqbrbet"/><path class="c8b73tuui"/></g>`,
		"fallback": "streamline-freehand-color:gesture-double-tap",
	});
}

export default Component;
