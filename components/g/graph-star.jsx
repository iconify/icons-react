import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/e_3apbb9f.css';
import '../../css/c/cdbe9ac0s.css';
import '../../css/t/trr-_mkon.css';
import '../../css/i/iujjribmd.css';
import '../../css/u/uy0-fdgsh.css';
import '../../css/w/w9-l4pzix.css';
import '../../css/y/ya6370b_w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="e_3apbb9f"/><circle class="cdbe9ac0s"/><circle class="trr-_mkon"/><circle class="iujjribmd"/><circle class="uy0-fdgsh"/><circle class="w9-l4pzix"/><circle class="ya6370b_w"/></g>`,
		"fallback": "lucide:graph-star",
	});
}

export default Component;
