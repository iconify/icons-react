import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r1prixbal.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r1prixbal"/>`,
		"fallback": "game-icons:barbed-arrow",
	});
}

export default Component;
