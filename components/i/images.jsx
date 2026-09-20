import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xhm_tdbwp.css';
import '../../css/x/xcp1ycc0a.css';
import '../../css/c/cwoxs8bss.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="xhm_tdbwp"/><circle class="xcp1ycc0a"/><path class="cwoxs8bss"/></g>`,
		"fallback": "meteor-icons:images",
	});
}

export default Component;
