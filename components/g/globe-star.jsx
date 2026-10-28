import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n3vz1ubyv.css';
import '../../css/u/u5h8llb9a.css';
import '../../css/w/w8m-xxf_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="n3vz1ubyv"/><path class="u5h8llb9a"/><path class="w8m-xxf_j"/></g>`,
		"fallback": "andrsrxn:globe-star",
	});
}

export default Component;
