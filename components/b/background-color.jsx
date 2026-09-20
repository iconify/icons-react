import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/muybtqbir.css';

const viewBox = {"width":24,"height":24,"left":-6,"top":-6};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="muybtqbir"/>`,
		"fallback": "jam:background-color",
	});
}

export default Component;
