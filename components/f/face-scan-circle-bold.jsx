import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mrmciybze.css';
import '../../css/g/git96pb1s.css';
import '../../css/f/fkavkab1f.css';
import '../../css/p/pob86kbbl.css';
import '../../css/u/uhaaxhb8v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="mrmciybze"/><path class="git96pb1s"/><path class="fkavkab1f"/><path class="pob86kbbl"/><path class="uhaaxhb8v"/></g>`,
		"fallback": "solar:face-scan-circle-bold",
	});
}

export default Component;
