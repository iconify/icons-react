import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7aowb5fv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l7aowb5fv"/>`,
		"fallback": "game-icons:double-fish",
	});
}

export default Component;
