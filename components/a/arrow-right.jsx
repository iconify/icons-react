import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t5a_1ab3h.css';
import '../../css/k/kdyg1ukjd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t5a_1ab3h"/><path class="kdyg1ukjd"/>`,
		"fallback": "fontisto:arrow-right",
	});
}

export default Component;
