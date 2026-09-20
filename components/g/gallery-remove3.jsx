import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/n61os6n_x.css';
import '../../css/s/sdc39209h.css';
import '../../css/n/nv63dpbns.css';
import '../../css/f/fze9j-bld.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="n61os6n_x"/><path class="sdc39209h"/><path class="nv63dpbns"/><path class="fze9j-bld"/></g>`,
		"fallback": "reicon:gallery-remove3",
	});
}

export default Component;
