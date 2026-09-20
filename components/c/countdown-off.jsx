import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sd2-nwbye.css';
import '../../css/l/l-ca2edhw.css';
import '../../css/w/w-lvmjg0i.css';
import '../../css/g/gsbedy41l.css';
import '../../css/a/a26ez0-6d.css';
import '../../css/r/rh90to7ou.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sd2-nwbye"/><path clip-rule="evenodd" class="l-ca2edhw"/><path class="w-lvmjg0i"/><path clip-rule="evenodd" class="gsbedy41l"/><path clip-rule="evenodd" class="a26ez0-6d"/><path clip-rule="evenodd" class="rh90to7ou"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-print:countdown-off",
	});
}

export default Component;
