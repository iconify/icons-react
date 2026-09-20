import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/spd8p2yvd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="spd8p2yvd"/>`,
		"fallback": "tabler:caret-up-down",
	});
}

export default Component;
