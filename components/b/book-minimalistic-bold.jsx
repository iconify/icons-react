import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mcgmm_a3s.css';
import '../../css/v/v11avebgt.css';
import '../../css/c/c7jgn5pht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mcgmm_a3s"/><path class="v11avebgt"/><path class="c7jgn5pht"/>`,
		"fallback": "solar:book-minimalistic-bold",
	});
}

export default Component;
