import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufjel18om.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ufjel18om"/>`,
		"fallback": "game-icons:corkscrew",
	});
}

export default Component;
