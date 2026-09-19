import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/i/ixyen0btu.css';
import '../../css/v/vluih-bae.css';
import '../../css/x/xjcmv5b-o.css';
import '../../css/n/nyw89sbvb.css';
import '../../css/p/p9fzvk6ve.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="ixyen0btu"/><path class="vluih-bae"/><path class="xjcmv5b-o"/><path class="nyw89sbvb"/><path class="p9fzvk6ve"/></g>`,
		"fallback": "icon-park:checklist",
	});
}

export default Component;
