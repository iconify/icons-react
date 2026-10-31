import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/i/ieby17vrm.css';
import '../../css/e/e61vzcrmw.css';
import '../../css/f/ffvfrhkat.css';
import '../../css/r/r3hgbspfz.css';
import '../../css/y/yky17ne2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="ieby17vrm wm-shadow"/><path class="e61vzcrmw wm-shadow"/><path class="ffvfrhkat"/><path class="r3hgbspfz"/><path class="yky17ne2t"/></g>`,
		"fallback": "withicons-brutal:clipboard-x",
	});
}

export default Component;
