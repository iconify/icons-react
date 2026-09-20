import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uaa5_5o5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uaa5_5o5k"/>`,
		"fallback": "tabler:bong-off",
	});
}

export default Component;
