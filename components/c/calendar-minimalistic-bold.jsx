import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dbzkg2bkw.css';
import '../../css/e/e_29zdb8m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dbzkg2bkw"/><path class="e_29zdb8m"/>`,
		"fallback": "solar:calendar-minimalistic-bold",
	});
}

export default Component;
