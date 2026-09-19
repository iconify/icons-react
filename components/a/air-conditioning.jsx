import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/i/ifxv5jnsx.css';
import '../../css/r/rk-tksbzu.css';
import '../../css/s/s91atubcm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><rect class="ifxv5jnsx"/><path class="rk-tksbzu"/><path class="s91atubcm"/></g>`,
		"fallback": "icon-park-solid:air-conditioning",
	});
}

export default Component;
