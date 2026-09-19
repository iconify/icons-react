import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s27d_blek.css';
import '../../css/p/pjyeu65td.css';
import '../../css/h/hcj6o-bax.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s27d_blek"/><circle class="pjyeu65td"/><circle class="hcj6o-bax"/>`,
		"fallback": "bxs:face",
	});
}

export default Component;
