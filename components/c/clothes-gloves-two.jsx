import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/b/bjcqupa3y.css';
import '../../css/o/ou428xbgv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="bjcqupa3y"/><path class="ou428xbgv"/></g>`,
		"fallback": "icon-park:clothes-gloves-two",
	});
}

export default Component;
