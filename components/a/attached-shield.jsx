import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/me234t_fg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="me234t_fg"/>`,
		"fallback": "game-icons:attached-shield",
	});
}

export default Component;
