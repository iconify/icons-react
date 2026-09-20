import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uuq0ab0qq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uuq0ab0qq"/>`,
		"fallback": "selfhst:couchdb-dark",
	});
}

export default Component;
