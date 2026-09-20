import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ua1c_6t9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ua1c_6t9r"/>`,
		"fallback": "streamline-sharp:delete-bookmark",
	});
}

export default Component;
