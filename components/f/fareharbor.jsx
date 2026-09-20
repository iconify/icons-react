import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/plyr68b_m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="plyr68b_m"/>`,
		"fallback": "thesvg-color:fareharbor",
	});
}

export default Component;
