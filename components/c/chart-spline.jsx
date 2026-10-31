import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/f/fefa1ib-u.css';
import '../../css/c/cw36_6mco.css';
import '../../css/h/h13-u3bnw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="fefa1ib-u wm-k"/><path class="cw36_6mco wm-a"/><path class="h13-u3bnw wm-deco"/></g>`,
		"fallback": "withicons-kawaii:chart-spline",
	});
}

export default Component;
