import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vwxqfcx0p.css';

const viewBox = {"width":29,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vwxqfcx0p"/>`,
		"fallback": "fontisto:airplay",
	});
}

export default Component;
