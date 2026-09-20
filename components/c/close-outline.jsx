import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cbmv7io-g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cbmv7io-g"/>`,
		"fallback": "mdi:close-outline",
	});
}

export default Component;
