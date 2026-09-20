import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/clmjnb28i.css';
import '../../css/s/sayrawf8c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clmjnb28i"/><path class="sayrawf8c"/>`,
		"fallback": "selfhst:flow-like-light",
	});
}

export default Component;
