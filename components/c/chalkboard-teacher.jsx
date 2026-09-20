import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wl6_bbbdp.css';
import '../../css/b/byqxzk3de.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wl6_bbbdp"/><path class="byqxzk3de"/></g>`,
		"fallback": "tabler:chalkboard-teacher",
	});
}

export default Component;
