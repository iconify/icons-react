import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/injr7pqjp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="injr7pqjp"/>`,
		"fallback": "selfhst:hashicorp-consul-dark",
	});
}

export default Component;
