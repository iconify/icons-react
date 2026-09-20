import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sc_o6xbkt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sc_o6xbkt"/>`,
		"fallback": "simple-icons:bereal",
	});
}

export default Component;
