import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gipd11bxp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gipd11bxp"/>`,
		"fallback": "griddy-icons:chevron-down",
	});
}

export default Component;
