import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u13imoq4z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u13imoq4z"/>`,
		"fallback": "selfhst:headlamp-dark",
	});
}

export default Component;
