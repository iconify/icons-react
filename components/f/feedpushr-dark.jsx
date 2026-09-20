import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vutzp7v9n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vutzp7v9n"/>`,
		"fallback": "selfhst:feedpushr-dark",
	});
}

export default Component;
