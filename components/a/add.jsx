import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqd8fcboz.css';
import '../../css/p/pg9erg_-c.css';
import '../../css/r/ri_6z2bec.css';
import '../../css/h/hi60_ub5k.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hqd8fcboz"><circle class="pg9erg_-c"/><path class="ri_6z2bec"/><path class="hi60_ub5k"/></g>`,
		"fallback": "gala:add",
	});
}

export default Component;
