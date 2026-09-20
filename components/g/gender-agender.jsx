import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yarre3bnt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yarre3bnt"/>`,
		"fallback": "tabler:gender-agender",
	});
}

export default Component;
