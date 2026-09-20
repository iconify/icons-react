import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/enis4sb4v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="enis4sb4v"/>`,
		"fallback": "selfhst:imdb-dark",
	});
}

export default Component;
