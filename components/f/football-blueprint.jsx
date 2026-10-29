import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/y/yzln40bxl.css';
import '../../css/y/ynh3ncb9f.css';
import '../../css/u/ut75iob1g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco yzln40bxl"/><path class="wm-deco ynh3ncb9f"/><path class="ut75iob1g"/></g>`,
		"fallback": "withicons:football-blueprint",
	});
}

export default Component;
