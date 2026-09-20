import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jv3menb0n.css';
import '../../css/x/xr67tfbso.css';
import '../../css/d/dcxacmbtr.css';
import '../../css/a/ay7n0_bzf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jv3menb0n"/><path class="xr67tfbso"/><path class="dcxacmbtr"/><path class="ay7n0_bzf"/>`,
		"fallback": "selfhst:html5",
	});
}

export default Component;
