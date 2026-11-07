import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ke6bcb_hh.css';
import '../../css/z/z1eomfj2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ke6bcb_hh"/><path clip-rule="evenodd" class="z1eomfj2v"/>`,
		"fallback": "solar:archive-up-minimalistic-bold-duotone",
	});
}

export default Component;
