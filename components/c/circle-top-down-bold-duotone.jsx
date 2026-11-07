import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnb90nbxf.css';
import '../../css/s/sh-3ee_ik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rnb90nbxf"/><path clip-rule="evenodd" class="sh-3ee_ik"/>`,
		"fallback": "solar:circle-top-down-bold-duotone",
	});
}

export default Component;
