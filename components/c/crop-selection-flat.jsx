import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hyi7vcbdg.css';
import '../../css/u/uojt-9b6s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hyi7vcbdg"/><path class="uojt-9b6s"/></g>`,
		"fallback": "streamline-plump-color:crop-selection-flat",
	});
}

export default Component;
