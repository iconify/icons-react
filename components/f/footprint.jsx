import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gl7-nrblp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gl7-nrblp"/>`,
		"fallback": "game-icons:footprint",
	});
}

export default Component;
