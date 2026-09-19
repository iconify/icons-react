import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ug29y9b4b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ug29y9b4b"/>`,
		"fallback": "game-icons:blackcurrant",
	});
}

export default Component;
