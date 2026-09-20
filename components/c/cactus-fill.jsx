import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/plg1gtjuj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="plg1gtjuj"/>`,
		"fallback": "ri:cactus-fill",
	});
}

export default Component;
