import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kldeo4bbz.css';
import '../../css/w/wvuj0bbds.css';
import '../../css/i/ir9c1ubht.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kldeo4bbz"/><path class="wvuj0bbds"/><path class="ir9c1ubht"/></g>`,
		"fallback": "streamline-flex-color:help-chat-1",
	});
}

export default Component;
