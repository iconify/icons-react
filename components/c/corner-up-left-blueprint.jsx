import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/e/el1rzocfz.css';
import '../../css/e/eb2qabupy.css';
import '../../css/y/y4erujgcb.css';
import '../../css/q/qffe8c_yi.css';
import '../../css/x/xhl_tfn7d.css';
import '../../css/z/zotfi3dhe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="el1rzocfz wm-deco"/><path class="eb2qabupy wm-deco"/><path class="wm-k y4erujgcb"/><path class="qffe8c_yi wm-a"/><path class="wm-k xhl_tfn7d"/><path class="wm-a zotfi3dhe"/></g>`,
		"fallback": "withicons:corner-up-left-blueprint",
	});
}

export default Component;
