import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_29zdb8m.css';
import '../../css/a/a6-juwioy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e_29zdb8m"/><path clip-rule="evenodd" class="a6-juwioy"/>`,
		"fallback": "solar:calendar-add-bold",
	});
}

export default Component;
