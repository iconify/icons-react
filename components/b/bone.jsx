import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/m/mw_sj1dvg.css';
import '../../css/y/yrnv22bjh.css';
import '../../css/c/cctzrl-0g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="mw_sj1dvg"/><path class="yrnv22bjh"/><path class="cctzrl-0g wm-deco"/></g>`,
		"fallback": "withicons-kawaii:bone",
	});
}

export default Component;
