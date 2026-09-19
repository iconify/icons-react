import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/o/oxacldbke.css';
import '../../css/q/q1t7td-cl.css';
import '../../css/a/aoz7iuonc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="oxacldbke"/><path class="q1t7td-cl"/><path class="aoz7iuonc"/></g>`,
		"fallback": "icon-park-solid:folder-lock-one",
	});
}

export default Component;
