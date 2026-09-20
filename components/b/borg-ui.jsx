import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wb4fn93xo.css';
import '../../css/u/u82ou6akr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="wb4fn93xo"/><path class="u82ou6akr"/>`,
		"fallback": "selfhst:borg-ui",
	});
}

export default Component;
