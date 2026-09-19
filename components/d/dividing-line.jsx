import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n08ut8bcp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n08ut8bcp"/>`,
		"fallback": "icon-park-outline:dividing-line",
	});
}

export default Component;
