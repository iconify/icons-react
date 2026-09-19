import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nq0j-ab4l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nq0j-ab4l"/>`,
		"fallback": "game-icons:canadian-goose",
	});
}

export default Component;
