import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smd-g2-lg.css';
import '../../css/w/w9yumzbsf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="smd-g2-lg"/><path clip-rule="evenodd" class="w9yumzbsf"/>`,
		"fallback": "bitcoin-icons:bitcoin-circle-filled",
	});
}

export default Component;
