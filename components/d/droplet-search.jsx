import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jajk6c28e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jajk6c28e"/>`,
		"fallback": "tabler:droplet-search",
	});
}

export default Component;
