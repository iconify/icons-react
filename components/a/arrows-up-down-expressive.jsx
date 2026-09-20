import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sml5s9xuw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sml5s9xuw"/>`,
		"fallback": "nrk:arrows-up-down-expressive",
	});
}

export default Component;
