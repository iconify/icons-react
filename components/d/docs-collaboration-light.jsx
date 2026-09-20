import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jarn-80ay.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jarn-80ay"/>`,
		"fallback": "selfhst:docs-collaboration-light",
	});
}

export default Component;
