import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/m/mxnvgybaq.css';
import '../../css/e/eey14195s.css';
import '../../css/d/dp7s3bb_g.css';
import '../../css/p/px1vhcixv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="mxnvgybaq"/><rect class="eey14195s"/><path class="dp7s3bb_g"/><path class="px1vhcixv"/></g>`,
		"fallback": "icon-park-outline:file-ppt",
	});
}

export default Component;
