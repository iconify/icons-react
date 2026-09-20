import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mm2dhfo-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mm2dhfo-f"/>`,
		"fallback": "pixelarticons:card-stack",
	});
}

export default Component;
