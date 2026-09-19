import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dde3bnu6l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dde3bnu6l"/>`,
		"fallback": "game-icons:captain-hat-profile",
	});
}

export default Component;
