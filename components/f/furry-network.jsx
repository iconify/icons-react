import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rqylqb6qd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rqylqb6qd"/>`,
		"fallback": "cib:furry-network",
	});
}

export default Component;
