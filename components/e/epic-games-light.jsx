import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q77mleb_e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q77mleb_e"/>`,
		"fallback": "selfhst:epic-games-light",
	});
}

export default Component;
