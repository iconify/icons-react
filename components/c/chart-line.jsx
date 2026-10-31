import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/d/d0wnsrbyc.css';
import '../../css/c/cw36_6mco.css';
import '../../css/a/ampev-b2a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="d0wnsrbyc wm-k"/><path class="cw36_6mco wm-a"/><path class="ampev-b2a wm-deco"/></g>`,
		"fallback": "withicons-kawaii:chart-line",
	});
}

export default Component;
