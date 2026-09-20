import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/so1ox1b0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="so1ox1b0i"/>`,
		"fallback": "tabler:circle-letter-i-filled",
	});
}

export default Component;
