import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/o/opb5c-oie.css';
import '../../css/h/hqtmz8h1c.css';
import '../../css/b/b7afk-g9p.css';
import '../../css/m/mz2pgdb7c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="opb5c-oie"/><path class="hqtmz8h1c"/><path class="b7afk-g9p"/><path class="mz2pgdb7c"/></g>`,
		"fallback": "icon-park:chopsticks-fork",
	});
}

export default Component;
