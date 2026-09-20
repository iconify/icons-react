import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ahvp5t92z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ahvp5t92z"/>`,
		"fallback": "proicons:beaker",
	});
}

export default Component;
