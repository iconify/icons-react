import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/m/metobub6v.css';
import '../../css/c/cn0p1ub3z.css';
import '../../css/a/a0mj96bbq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="metobub6v"/><path class="cn0p1ub3z"/><path class="a0mj96bbq"/></g>`,
		"fallback": "icon-park:chicken",
	});
}

export default Component;
