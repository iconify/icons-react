import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/l/lcee_744z.css';
import '../../css/i/igiiosbvy.css';
import '../../css/q/qm1qe08zp.css';
import '../../css/l/lt7eicu4o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="lcee_744z"/><path class="igiiosbvy"/><path class="qm1qe08zp"/><path class="lt7eicu4o"/></g>`,
		"fallback": "icon-park-solid:database-position",
	});
}

export default Component;
