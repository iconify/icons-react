import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/elzab8bky.css';
import '../../css/f/funyg-b4n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="elzab8bky"/><path class="funyg-b4n"/>`,
		"fallback": "selfhst:continuwuity-light",
	});
}

export default Component;
