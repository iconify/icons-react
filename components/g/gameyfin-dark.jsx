import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/semirj3sh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="semirj3sh"/>`,
		"fallback": "selfhst:gameyfin-dark",
	});
}

export default Component;
