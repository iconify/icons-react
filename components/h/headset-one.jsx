import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xxlvjrbzv.css';
import '../../css/g/gafn4lbls.css';
import '../../css/i/iuzb74iyl.css';
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
		"content": `<g class="ft5dv1b6b"><path class="xxlvjrbzv"/><path class="gafn4lbls"/><path class="iuzb74iyl"/><path class="v0vmgxydm"/><path class="r0vpilb2z"/></g>`,
		"fallback": "icon-park-solid:headset-one",
	});
}

export default Component;
