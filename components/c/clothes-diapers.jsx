import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/c/cvp28ryrc.css';
import '../../css/v/vfem-9x1e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="cvp28ryrc"/><path class="vfem-9x1e"/></g>`,
		"fallback": "icon-park-outline:clothes-diapers",
	});
}

export default Component;
