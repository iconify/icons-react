import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nbm9b0bbp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nbm9b0bbp"/>`,
		"fallback": "tabler:device-watch-up",
	});
}

export default Component;
