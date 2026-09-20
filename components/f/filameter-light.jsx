import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vj7ba9y9x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vj7ba9y9x"/>`,
		"fallback": "selfhst:filameter-light",
	});
}

export default Component;
