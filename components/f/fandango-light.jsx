import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vt_9hnz1f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vt_9hnz1f"/>`,
		"fallback": "selfhst:fandango-light",
	});
}

export default Component;
