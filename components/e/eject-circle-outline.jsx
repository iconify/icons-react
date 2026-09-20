import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/es5er9stz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="es5er9stz"/>`,
		"fallback": "mdi:eject-circle-outline",
	});
}

export default Component;
