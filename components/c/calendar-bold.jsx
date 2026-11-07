import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_29zdb8m.css';
import '../../css/c/cz_a3-jge.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e_29zdb8m"/><path clip-rule="evenodd" class="cz_a3-jge"/>`,
		"fallback": "solar:calendar-bold",
	});
}

export default Component;
