import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/atksbtj8s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="atksbtj8s"/>`,
		"fallback": "noviair:cassette-play",
	});
}

export default Component;
