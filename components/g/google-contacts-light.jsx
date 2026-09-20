import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p64es6bla.css';
import '../../css/f/fx4qy8b3n.css';
import '../../css/w/we___fbjz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p64es6bla"/><path class="fx4qy8b3n"/><path class="we___fbjz"/>`,
		"fallback": "selfhst:google-contacts-light",
	});
}

export default Component;
