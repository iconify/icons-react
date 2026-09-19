import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t8jv9db4y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t8jv9db4y"/>`,
		"fallback": "game-icons:cliff-crossing",
	});
}

export default Component;
