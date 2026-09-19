import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rxllcrbdv.css';

const viewBox = {"width":384,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rxllcrbdv"/>`,
		"fallback": "zmdi:google-play",
	});
}

export default Component;
