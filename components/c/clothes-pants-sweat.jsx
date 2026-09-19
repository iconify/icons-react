import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/o/olbdy62vw.css';
import '../../css/e/er6jam89u.css';
import '../../css/n/n6zdtvbbl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="olbdy62vw"/><path class="er6jam89u"/><path class="n6zdtvbbl"/></g>`,
		"fallback": "icon-park-solid:clothes-pants-sweat",
	});
}

export default Component;
