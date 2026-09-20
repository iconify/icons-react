import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fr6h1qbfj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fr6h1qbfj"/>`,
		"fallback": "selfhst:asterisk",
	});
}

export default Component;
