import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/u/ugxv4_b0y.css';
import '../../css/h/hmwbs5mdb.css';
import '../../css/q/qhj6u7bmm.css';
import '../../css/j/jk7ggdcef.css';
import '../../css/j/jj7r4xgjd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="ugxv4_b0y wm-deco"/><path class="hmwbs5mdb wm-deco"/><path class="qhj6u7bmm wm-deco"/><path class="jk7ggdcef wm-k"/><path class="jj7r4xgjd wm-a"/></g>`,
		"fallback": "withicons:alarm-clock-blueprint",
	});
}

export default Component;
