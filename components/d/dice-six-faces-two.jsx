import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r94wsub5u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r94wsub5u"/>`,
		"fallback": "game-icons:dice-six-faces-two",
	});
}

export default Component;
