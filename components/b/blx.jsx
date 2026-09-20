import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/stcw4r39t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="stcw4r39t"/>`,
		"fallback": "token:blx",
	});
}

export default Component;
