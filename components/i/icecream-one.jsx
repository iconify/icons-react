import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/h/h1rcu1b2b.css';
import '../../css/e/echpw1dsw.css';
import '../../css/g/guq_lwl5e.css';
import '../../css/f/f5rmglb-z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="h1rcu1b2b"/><path class="echpw1dsw"/><path class="guq_lwl5e"/><path class="f5rmglb-z"/></g>`,
		"fallback": "icon-park:icecream-one",
	});
}

export default Component;
