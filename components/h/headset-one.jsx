import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g2ze6cbmd.css';
import '../../css/g/gafn4lbls.css';
import '../../css/f/fgjqp2b3t.css';
import '../../css/v/v0vmgxydm.css';
import '../../css/r/r0vpilb2z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g2ze6cbmd"/><path class="gafn4lbls"/><path class="fgjqp2b3t"/><path class="v0vmgxydm"/><path class="r0vpilb2z"/></g>`,
		"fallback": "icon-park-outline:headset-one",
	});
}

export default Component;
