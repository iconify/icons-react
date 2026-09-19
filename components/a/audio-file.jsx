import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/x/xh09az3_x.css';
import '../../css/m/mhir002ms.css';
import '../../css/n/nrm7n3bow.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="xh09az3_x"/><path class="mhir002ms"/><circle class="nrm7n3bow"/></g>`,
		"fallback": "icon-park-outline:audio-file",
	});
}

export default Component;
