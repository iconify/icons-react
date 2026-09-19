import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/a/auhvz2c1d.css';
import '../../css/k/kmn_ztb-h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="auhvz2c1d"/><path class="kmn_ztb-h"/></g>`,
		"fallback": "icon-park-outline:briefcase",
	});
}

export default Component;
