import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/h648icg5m.css';
import '../../css/j/jvbru7b5c.css';
import '../../css/n/no4nwlbdg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="h648icg5m"/><path class="jvbru7b5c"/><path class="no4nwlbdg"/></g>`,
		"fallback": "streamline-sharp:drawing-compass",
	});
}

export default Component;
