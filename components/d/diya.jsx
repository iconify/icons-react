import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/h/h4rgspq6f.css';
import '../../css/r/ruvhuqbko.css';
import '../../css/q/qesl3ftiz.css';
import '../../css/i/ieced1b-r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="h4rgspq6f"/><path class="ruvhuqbko"/><path class="qesl3ftiz wm-k"/><path class="ieced1b-r wm-a"/></g>`,
		"fallback": "withicons-kawaii:diya",
	});
}

export default Component;
