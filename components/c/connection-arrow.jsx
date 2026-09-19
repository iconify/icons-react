import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/p/pqdzjzbll.css';
import '../../css/q/qw1o1sbjo.css';
import '../../css/n/nmm172boh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="pqdzjzbll"/><path class="qw1o1sbjo"/><path class="nmm172boh"/></g>`,
		"fallback": "icon-park:connection-arrow",
	});
}

export default Component;
