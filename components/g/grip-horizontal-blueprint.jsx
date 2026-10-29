import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/n/nrlirxy2k.css';
import '../../css/d/dnduw-b0j.css';
import '../../css/w/wiw6j-bgs.css';
import '../../css/g/g351f3ful.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="nrlirxy2k wm-deco"/><path class="dnduw-b0j wm-deco"/><path class="wiw6j-bgs wm-deco"/><path class="g351f3ful"/></g>`,
		"fallback": "withicons:grip-horizontal-blueprint",
	});
}

export default Component;
