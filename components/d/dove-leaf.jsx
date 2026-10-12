import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ey2tz9b1s.css';
import '../../css/r/r6w5babud.css';
import '../../css/o/oh8wxob5u.css';
import '../../css/g/gomqhob-z.css';
import '../../css/x/x3mvkgo-q.css';
import '../../css/a/ab1z40bec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ey2tz9b1s"/><path class="r6w5babud"/><path class="oh8wxob5u"/><path class="gomqhob-z"/><path class="x3mvkgo-q"/><path class="ab1z40bec"/></g>`,
		"fallback": "andrsrxn:dove-leaf",
	});
}

export default Component;
