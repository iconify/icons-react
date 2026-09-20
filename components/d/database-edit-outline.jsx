import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/roglkek7y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="roglkek7y"/>`,
		"fallback": "mdi:database-edit-outline",
	});
}

export default Component;
