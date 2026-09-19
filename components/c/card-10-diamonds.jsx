import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vzz4drbmj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vzz4drbmj"/>`,
		"fallback": "game-icons:card-10-diamonds",
	});
}

export default Component;
