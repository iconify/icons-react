import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nro_fcb4m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nro_fcb4m"/>`,
		"fallback": "hugeicons:first-aid-kit",
	});
}

export default Component;
