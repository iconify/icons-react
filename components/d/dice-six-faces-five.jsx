import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kmzko8bxf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kmzko8bxf"/>`,
		"fallback": "game-icons:dice-six-faces-five",
	});
}

export default Component;
