import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pn45-2bbq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pn45-2bbq"/>`,
		"fallback": "lets-icons:expand-down-double-light",
	});
}

export default Component;
