import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hxvpjys5t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hxvpjys5t"/>`,
		"fallback": "game-icons:clockwork",
	});
}

export default Component;
