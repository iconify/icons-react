import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/aqhok2bbj.css';
import '../../css/g/ge35osufx.css';
import '../../css/x/xo0gn7bpl.css';
import '../../css/j/j-l21uo-c.css';
import '../../css/y/ynqplacsi.css';
import '../../css/j/jed98nbpx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="aqhok2bbj"/><path class="ge35osufx"/><path class="xo0gn7bpl"/><path class="j-l21uo-c"/><path class="ynqplacsi"/><path class="jed98nbpx"/></g>`,
		"fallback": "solar:help-broken",
	});
}

export default Component;
