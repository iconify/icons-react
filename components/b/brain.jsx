import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/an5ylwb3u.css';
import '../../css/f/fe5ciqmkb.css';
import '../../css/f/fsp10ybsu.css';
import '../../css/m/mpmv_oc4p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="an5ylwb3u"/><path class="fe5ciqmkb"/><path class="fsp10ybsu"/><path class="mpmv_oc4p"/></g>`,
		"fallback": "tabler:brain",
	});
}

export default Component;
