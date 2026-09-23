import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lt5h2-4uq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lt5h2-4uq"/>`,
		"fallback": "selfhst:crowbarr-light",
	});
}

export default Component;
