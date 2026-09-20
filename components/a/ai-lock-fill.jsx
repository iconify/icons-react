import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ost-0qr-b.css';
import '../../css/r/r5tlw_31c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ost-0qr-b"/><path clip-rule="evenodd" class="r5tlw_31c"/>`,
		"fallback": "si:ai-lock-fill",
	});
}

export default Component;
