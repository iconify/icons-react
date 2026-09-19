import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dmn9y9neh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dmn9y9neh"/>`,
		"fallback": "ion:git-commit",
	});
}

export default Component;
