import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f5a4g0baj.css';
import '../../css/i/ifr7ntl_w.css';
import '../../css/c/csa2n4lwk.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f5a4g0baj"/><path class="ifr7ntl_w"/><path class="csa2n4lwk"/>`,
		"fallback": "openmoji:canoe",
	});
}

export default Component;
