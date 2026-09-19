import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/v/vlcaug2yb.css';
import '../../css/k/ks_wjvb2m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="vlcaug2yb"/><path class="ks_wjvb2m"/></g>`,
		"fallback": "icon-park-outline:back-one",
	});
}

export default Component;
