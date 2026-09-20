import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4u8pbwjc.css';
import '../../css/w/w1afbccrr.css';
import '../../css/g/gauw9mb2z.css';
import '../../css/i/i8z2lwwei.css';
import '../../css/p/ppep3wazl.css';
import '../../css/v/v178r-ski.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/j/j0r4w5vzf.css';
import '../../css/r/reb-11q8z.css';
import '../../css/n/nypli5b0r.css';
import '../../css/y/yg03jhbum.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="x4u8pbwjc"><path class="w1afbccrr"/><circle class="gauw9mb2z"/><circle class="i8z2lwwei"/></g><path class="ppep3wazl"/><path class="v178r-ski"/><g class="jn8qy4bru"><path class="j0r4w5vzf"/><path class="reb-11q8z"/><path class="nypli5b0r"/><path class="yg03jhbum"/></g>`,
		"fallback": "openmoji:evacuate",
	});
}

export default Component;
