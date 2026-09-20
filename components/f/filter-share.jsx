import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/me9yveb9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="me9yveb9x"/>`,
		"fallback": "tabler:filter-share",
	});
}

export default Component;
