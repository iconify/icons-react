import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mdo3n1bae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mdo3n1bae"/>`,
		"fallback": "iconaut:hexagon-three-quarter-solid",
	});
}

export default Component;
