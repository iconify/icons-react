import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ym7f000we.css';
import '../../css/m/mz1_d65yo.css';
import '../../css/i/iq22m6bvn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ym7f000we"/><path class="mz1_d65yo"/><path class="iq22m6bvn"/>`,
		"fallback": "solar:documents-bold",
	});
}

export default Component;
