import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/d/dix8kzfkx.css';
import '../../css/v/vur_a_bje.css';
import '../../css/n/ncgacjnek.css';
import '../../css/o/o4em-hsef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="dix8kzfkx wm-deco"/><path class="vur_a_bje wm-deco"/><path class="ncgacjnek wm-deco"/><path class="o4em-hsef"/></g>`,
		"fallback": "withicons:bee-blueprint",
	});
}

export default Component;
