import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ri67s6byk.css';
import '../../css/g/g3y-_9y1u.css';
import '../../css/e/e5a26tbgj.css';
import '../../css/m/mne92vbbb.css';
import '../../css/i/i4avdri5q.css';
import '../../css/m/modiryu9x.css';
import '../../css/w/wkwa8bucm.css';
import '../../css/y/y-jrswg2m.css';
import '../../css/d/di8xmxbmp.css';

const viewBox = {"width":1500,"height":1500};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGKaOflcZt" width="1500" height="1500" x="0" y="0" mask-type="alpha" maskUnits="userSpaceOnUse"><path class="ri67s6byk"/></mask><mask id="SVGKH4wbeGh" width="1500" height="1500" x="0" y="0" maskUnits="userSpaceOnUse"><g mask="url(#SVGKaOflcZt)"><path class="g3y-_9y1u"/><path class="e5a26tbgj"/><path class="mne92vbbb"/><circle class="i4avdri5q"/><circle class="modiryu9x"/><path class="wkwa8bucm"/><path clip-rule="evenodd" class="y-jrswg2m"/></g></mask><path mask="url(#SVGKH4wbeGh)" class="di8xmxbmp"/>`,
		"fallback": "thesvg:emissary-ingress",
	});
}

export default Component;
