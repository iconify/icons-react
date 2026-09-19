import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u2j7ymbvi.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u2j7ymbvi"/>`,
		"fallback": "whh:fourimages",
	});
}

export default Component;
