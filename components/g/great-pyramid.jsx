import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ripyr9y3s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ripyr9y3s"/>`,
		"fallback": "game-icons:great-pyramid",
	});
}

export default Component;
