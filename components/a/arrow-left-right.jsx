import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/q/qqsdrzrgh.css';
import '../../css/h/hz6w9qbdw.css';
import '../../css/w/wcaq-jbkf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="qqsdrzrgh wm-k"/><path class="hz6w9qbdw wm-a"/><path class="wcaq-jbkf wm-deco"/></g>`,
		"fallback": "withicons-kawaii:arrow-left-right",
	});
}

export default Component;
