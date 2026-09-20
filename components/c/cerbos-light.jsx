import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qktj-0d9y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qktj-0d9y"/>`,
		"fallback": "selfhst:cerbos-light",
	});
}

export default Component;
