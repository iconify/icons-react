import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_wi8bcoy.css';

const viewBox = {"width":1025,"height":896};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u_wi8bcoy"/>`,
		"fallback": "whh:alignleft",
	});
}

export default Component;
