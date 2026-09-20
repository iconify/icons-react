import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/i2z4fbcpe.css';
import '../../css/v/v21qiwb4s.css';
import '../../css/k/ku_qpobzi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="i2z4fbcpe"/><path class="v21qiwb4s"/><path class="ku_qpobzi"/></g>`,
		"fallback": "solar:folder-with-files-line-duotone",
	});
}

export default Component;
