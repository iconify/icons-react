import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sp1oxqb9n.css';
import '../../css/r/rr6qynbft.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sp1oxqb9n"/><path class="rr6qynbft"/>`,
		"fallback": "cil:airplay",
	});
}

export default Component;
