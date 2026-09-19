import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/d/dn0_yib9b.css';
import '../../css/w/wlx9hpbxe.css';
import '../../css/c/cxrecccxa.css';
import '../../css/o/o4cwaobrg.css';
import '../../css/y/ygxju0b5w.css';
import '../../css/x/x025fcbfa.css';
import '../../css/d/dzy7xsbjl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="dn0_yib9b"/><path class="wlx9hpbxe"/><path class="cxrecccxa"/><rect class="o4cwaobrg"/><path class="ygxju0b5w"/><path class="x025fcbfa"/><path class="dzy7xsbjl"/></g>`,
		"fallback": "icon-park:airplane-window-one",
	});
}

export default Component;
