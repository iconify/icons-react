import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nyb81obux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nyb81obux"/>`,
		"fallback": "keyline-icons:circle-menu-sharp-fill",
	});
}

export default Component;
