import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/av00m1f8o.css';
import '../../css/e/e6kbp_ktm.css';
import '../../css/p/pn48gtbgw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="av00m1f8o"/><circle class="e6kbp_ktm"/><circle class="pn48gtbgw"/></g>`,
		"fallback": "lucide:hat-glasses",
	});
}

export default Component;
