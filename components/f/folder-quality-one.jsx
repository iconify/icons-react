import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/o/oxacldbke.css';
import '../../css/g/g2vt2g-1f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="oxacldbke"/><path class="g2vt2g-1f"/></g>`,
		"fallback": "icon-park-solid:folder-quality-one",
	});
}

export default Component;
