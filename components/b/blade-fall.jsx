import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ss2drd55i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ss2drd55i"/>`,
		"fallback": "game-icons:blade-fall",
	});
}

export default Component;
