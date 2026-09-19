import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/h/hx-qo_bxx.css';
import '../../css/a/au27dh1up.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="hx-qo_bxx"/><circle class="au27dh1up"/></g>`,
		"fallback": "icon-park-solid:connect-address-one",
	});
}

export default Component;
