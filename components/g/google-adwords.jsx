import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ek1kss65i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ek1kss65i"/>`,
		"fallback": "mdi:google-adwords",
	});
}

export default Component;
