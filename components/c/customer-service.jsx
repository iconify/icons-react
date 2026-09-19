import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/rq71efbev.css';
import '../../css/j/j-nmpnvye.css';
import '../../css/s/si_c3ty1j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="rq71efbev"/><path class="j-nmpnvye"/><path class="si_c3ty1j"/></g>`,
		"fallback": "hugeicons:customer-service",
	});
}

export default Component;
