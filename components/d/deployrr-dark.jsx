import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xs6zkkb6h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xs6zkkb6h"/>`,
		"fallback": "selfhst:deployrr-dark",
	});
}

export default Component;
