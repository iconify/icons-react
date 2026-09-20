import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p9dlz72cx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p9dlz72cx"/>`,
		"fallback": "selfhst:chitchatter-dark",
	});
}

export default Component;
