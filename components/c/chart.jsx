import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9_xqx6dr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y9_xqx6dr"/>`,
		"fallback": "game-icons:chart",
	});
}

export default Component;
