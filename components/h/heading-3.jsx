import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/e/ejg_wxkov.css';
import '../../css/x/xa3jgydgh.css';
import '../../css/l/l4xws5bgs.css';
import '../../css/j/jioj02bcw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="ejg_wxkov wm-k"/><path class="wm-a xa3jgydgh"/><path class="l4xws5bgs wm-s"/><path class="jioj02bcw wm-deco"/></g>`,
		"fallback": "withicons-kawaii:heading-3",
	});
}

export default Component;
