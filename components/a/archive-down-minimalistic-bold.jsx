import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h3h0_zb2o.css';
import '../../css/n/n3pz-6bxt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h3h0_zb2o"/><path class="n3pz-6bxt"/>`,
		"fallback": "solar:archive-down-minimalistic-bold",
	});
}

export default Component;
