import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/giv9vwr2b.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-4.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="giv9vwr2b"/>`,
		"fallback": "jam:dashboard-f",
	});
}

export default Component;
