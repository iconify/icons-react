import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_ld50e8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u_ld50e8d"/>`,
		"fallback": "noviair-light:id-card-x",
	});
}

export default Component;
