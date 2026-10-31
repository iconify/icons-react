import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/d/dfr8kabwp.css';
import '../../css/o/omdwggbcq.css';
import '../../css/w/wcaq-jbkf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="dfr8kabwp wm-k"/><path class="omdwggbcq wm-a"/><path class="wcaq-jbkf wm-deco"/></g>`,
		"fallback": "withicons-kawaii:bitcoin",
	});
}

export default Component;
