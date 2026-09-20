import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u27j0mbea.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u27j0mbea"/>`,
		"fallback": "tabler:device-watch-search",
	});
}

export default Component;
