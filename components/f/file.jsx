import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hky7yeb8h.css';
import '../../css/m/mfgm_vuzq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hky7yeb8h"/><path class="mfgm_vuzq"/></g>`,
		"fallback": "feather:file",
	});
}

export default Component;
