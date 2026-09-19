import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xl1__qb0r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xl1__qb0r"/>`,
		"fallback": "akar-icons:chevron-right-small",
	});
}

export default Component;
