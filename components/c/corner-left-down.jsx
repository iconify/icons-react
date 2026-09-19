import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/l/lby40xbqa.css';
import '../../css/o/ofcsvz1oc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="lby40xbqa"/><path class="ofcsvz1oc"/></g>`,
		"fallback": "icon-park-outline:corner-left-down",
	});
}

export default Component;
