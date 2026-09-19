import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nv1deiyek.css';
import '../../css/k/kg14vw5et.css';
import '../../css/p/pfjz1wg0j.css';
import '../../css/d/d5f13wc2z.css';
import '../../css/u/ucjr577xf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="nv1deiyek"/><path class="kg14vw5et"/><path class="pfjz1wg0j"/><path class="d5f13wc2z"/><path class="ucjr577xf"/></g>`,
		"fallback": "icon-park:extend",
	});
}

export default Component;
