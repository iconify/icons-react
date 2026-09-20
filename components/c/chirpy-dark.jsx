import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ud1ko8bla.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ud1ko8bla"/>`,
		"fallback": "selfhst:chirpy-dark",
	});
}

export default Component;
