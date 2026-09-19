import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w_3-2pbtd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w_3-2pbtd"/>`,
		"fallback": "famicons:american-football-sharp",
	});
}

export default Component;
