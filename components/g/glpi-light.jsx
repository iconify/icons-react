import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ljb8flb9u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ljb8flb9u"/>`,
		"fallback": "selfhst:glpi-light",
	});
}

export default Component;
