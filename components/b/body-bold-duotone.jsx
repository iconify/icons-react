import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_51kh_lz.css';
import '../../css/i/i6wfjybuf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n_51kh_lz"/><path class="i6wfjybuf"/>`,
		"fallback": "solar:body-bold-duotone",
	});
}

export default Component;
