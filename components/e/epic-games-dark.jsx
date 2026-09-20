import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/toni4fqyo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="toni4fqyo"/>`,
		"fallback": "selfhst:epic-games-dark",
	});
}

export default Component;
