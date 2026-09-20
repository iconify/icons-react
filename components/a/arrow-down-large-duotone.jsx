import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sx-x791iy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sx-x791iy"/>`,
		"fallback": "stash:arrow-down-large-duotone",
	});
}

export default Component;
