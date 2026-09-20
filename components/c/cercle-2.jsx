import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfaj228ns.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rfaj228ns"/>`,
		"fallback": "subway:cercle-2",
	});
}

export default Component;
