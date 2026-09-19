import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5fhvxbyq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x5fhvxbyq"/>`,
		"fallback": "game-icons:fluffy-flame",
	});
}

export default Component;
