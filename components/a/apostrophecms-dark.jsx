import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ru8eoqtct.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ru8eoqtct"/>`,
		"fallback": "selfhst:apostrophecms-dark",
	});
}

export default Component;
