import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d57gu2bcm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d57gu2bcm"/>`,
		"fallback": "tabler:filter-2-cog",
	});
}

export default Component;
