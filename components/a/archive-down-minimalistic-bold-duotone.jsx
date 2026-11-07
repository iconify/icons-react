import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ke6bcb_hh.css';
import '../../css/k/k_ae5dbku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ke6bcb_hh"/><path clip-rule="evenodd" class="k_ae5dbku"/>`,
		"fallback": "solar:archive-down-minimalistic-bold-duotone",
	});
}

export default Component;
