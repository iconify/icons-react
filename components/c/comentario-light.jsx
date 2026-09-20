import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l9y1xtn3g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l9y1xtn3g"/>`,
		"fallback": "selfhst:comentario-light",
	});
}

export default Component;
