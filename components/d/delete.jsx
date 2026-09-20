import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lqo-cjb6i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lqo-cjb6i"/>`,
		"fallback": "subway:delete",
	});
}

export default Component;
