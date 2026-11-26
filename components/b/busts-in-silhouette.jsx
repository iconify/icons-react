import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bfulm2bok.css';
import '../../css/q/qy6jgpbir.css';
import '../../css/f/feoue7bmd.css';
import '../../css/m/muh3a3bep.css';
import '../../css/l/l7lhxjbaz.css';
import '../../css/e/eyh48dbuz.css';
import '../../css/y/yqd7vhbod.css';
import '../../css/r/rmdwjiw9t.css';
import '../../css/t/tg6y7g6hk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><radialGradient id="SVGKnakVdcL" cx=".35" cy=".3" r=".8"><stop offset="0" class="bfulm2bok"/><stop offset="1" class="qy6jgpbir"/></radialGradient><radialGradient id="SVGB2kB7sCt" cx=".35" cy=".3" r=".8"><stop offset="0" class="feoue7bmd"/><stop offset="1" class="muh3a3bep"/></radialGradient></defs><g transform="matrix(3 0 0 3 -37.176 -55.956)" class="l7lhxjbaz"><path fill="url(#SVGKnakVdcL)" class="eyh48dbuz"/><ellipse fill="url(#SVGKnakVdcL)" class="yqd7vhbod"/><path fill="url(#SVGB2kB7sCt)" class="rmdwjiw9t"/><ellipse fill="url(#SVGB2kB7sCt)" class="tg6y7g6hk"/></g>`,
		"fallback": "xero-emoji:busts-in-silhouette",
	});
}

export default Component;
