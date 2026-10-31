import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/l/l41_pab0n.css';
import '../../css/l/l83m8bbbg.css';
import '../../css/w/wcaq-jbkf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="l41_pab0n wm-k"/><path class="l83m8bbbg wm-a"/><path class="wcaq-jbkf wm-deco"/></g>`,
		"fallback": "withicons-kawaii:arrow-up-right",
	});
}

export default Component;
