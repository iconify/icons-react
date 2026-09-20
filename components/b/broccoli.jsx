import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d397wrbdw.css';
import '../../css/o/o_vkwibvc.css';
import '../../css/h/h66lnp1ue.css';
import '../../css/c/ctthb-ybi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="d397wrbdw"/><path class="o_vkwibvc"/><path class="h66lnp1ue"/><path class="ctthb-ybi"/></g>`,
		"fallback": "lucide:broccoli",
	});
}

export default Component;
