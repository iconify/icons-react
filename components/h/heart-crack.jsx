import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sf3u8xbnb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sf3u8xbnb"/>`,
		"fallback": "noviair:heart-crack",
	});
}

export default Component;
