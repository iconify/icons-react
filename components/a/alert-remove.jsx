import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gpak7gqkk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gpak7gqkk"/>`,
		"fallback": "mdi:alert-remove",
	});
}

export default Component;
