import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u0tjn895r.css';
import '../../css/n/nwz75bygh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u0tjn895r"/><path class="nwz75bygh"/>`,
		"fallback": "bxs:building-house",
	});
}

export default Component;
