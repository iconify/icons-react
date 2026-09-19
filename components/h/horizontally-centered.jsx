import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/x/xpua17bdp.css';
import '../../css/y/y3tc9-bzh.css';
import '../../css/t/tv_gun5-p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><rect class="xpua17bdp"/><path class="y3tc9-bzh"/><path class="tv_gun5-p"/></g>`,
		"fallback": "icon-park:horizontally-centered",
	});
}

export default Component;
