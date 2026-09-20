import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ebd7wrd7q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ebd7wrd7q"/>`,
		"fallback": "selfhst:gmail-dark",
	});
}

export default Component;
