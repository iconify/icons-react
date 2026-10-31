import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/w/wnpq31wdo.css';
import '../../css/o/oqv16xbwi.css';
import '../../css/t/tbkwq6b6s.css';
import '../../css/m/mx42ssb0m.css';
import '../../css/b/bflzs0zqd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow wnpq31wdo"/><path class="oqv16xbwi wm-shadow"/><path class="tbkwq6b6s"/><path class="mx42ssb0m"/><path class="bflzs0zqd"/></g>`,
		"fallback": "withicons-brutal:award",
	});
}

export default Component;
