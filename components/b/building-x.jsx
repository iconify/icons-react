import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mqijn-bno.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mqijn-bno"/>`,
		"fallback": "noviair-light:building-x",
	});
}

export default Component;
