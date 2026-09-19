import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/f/ffcbr62lr.css';
import '../../css/o/oe9mr511e.css';
import '../../css/f/fccbx-w-d.css';
import '../../css/g/gzj01nwrt.css';
import '../../css/p/puc9_8b0p.css';
import '../../css/x/xds0h1byv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="ffcbr62lr"/><path class="oe9mr511e"/><path class="fccbx-w-d"/><path class="gzj01nwrt"/><path class="puc9_8b0p"/><path class="xds0h1byv"/></g>`,
		"fallback": "icon-park:acceleration",
	});
}

export default Component;
