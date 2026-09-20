import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ok4g82-ws.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ok4g82-ws"/>`,
		"fallback": "selfhst:hdhomerun-dark",
	});
}

export default Component;
