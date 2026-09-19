import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nxgk9xb-z.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nxgk9xb-z"/>`,
		"fallback": "fluent-mdl2:event-tentative-mirrored",
	});
}

export default Component;
