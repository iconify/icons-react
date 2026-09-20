import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/fll0uqb6i.css';
import '../../css/p/pfg0j7owr.css';
import '../../css/m/m7ajg_m0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="fll0uqb6i"/><path class="pfg0j7owr"/><path class="m7ajg_m0j"/></g>`,
		"fallback": "streamline-ultimate:cloud-warning",
	});
}

export default Component;
