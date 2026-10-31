import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/s/s6q27qb3v.css';
import '../../css/l/lw3ir5-go.css';
import '../../css/c/cw36_6mco.css';
import '../../css/h/hnswhvb8m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="s6q27qb3v"/><path class="lw3ir5-go wm-k"/><path class="cw36_6mco wm-a"/><path class="hnswhvb8m wm-deco"/></g>`,
		"fallback": "withicons-kawaii:chart-scatter",
	});
}

export default Component;
