import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkru72b-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jkru72b-t"/>`,
		"fallback": "solar:incognito-bold",
	});
}

export default Component;
