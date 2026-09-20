import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/us2nzrqbj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="us2nzrqbj"/>`,
		"fallback": "selfhst:dumb-genius-dark",
	});
}

export default Component;
