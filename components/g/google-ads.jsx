import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/c/cblyjfbfa.css';
import '../../css/t/tzb2l-bbx.css';
import '../../css/l/lsvuykfaf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="cblyjfbfa"/><path class="tzb2l-bbx"/><circle transform="rotate(25 12.083 36.688)" class="lsvuykfaf"/></g>`,
		"fallback": "icon-park-solid:google-ads",
	});
}

export default Component;
