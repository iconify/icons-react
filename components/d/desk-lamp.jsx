import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kqvw-cb0c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kqvw-cb0c"/>`,
		"fallback": "cbi:desk-lamp",
	});
}

export default Component;
