import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3j8a4h1u.css';
import '../../css/r/r3b4dgb9r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l3j8a4h1u"/><path class="r3b4dgb9r"/>`,
		"fallback": "selfhst:feedly",
	});
}

export default Component;
