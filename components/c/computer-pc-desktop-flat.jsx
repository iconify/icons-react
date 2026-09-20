import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n36zmmbql.css';
import '../../css/z/zi8j62h1d.css';
import '../../css/u/ubxfl-wfc.css';
import '../../css/w/wovi-xzrv.css';
import '../../css/d/dgs8d651a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n36zmmbql"/><path class="zi8j62h1d"/><path class="ubxfl-wfc"/><path class="wovi-xzrv"/><path clip-rule="evenodd" class="dgs8d651a"/></g>`,
		"fallback": "streamline-plump-color:computer-pc-desktop-flat",
	});
}

export default Component;
