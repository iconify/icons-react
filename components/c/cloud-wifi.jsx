import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/j/jddmk_bdc.css';
import '../../css/o/ojsx_p6lu.css';
import '../../css/c/ceouy82kl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="jddmk_bdc"/><path class="ojsx_p6lu"/><path class="ceouy82kl"/></g>`,
		"fallback": "streamline-sharp-color:cloud-wifi",
	});
}

export default Component;
