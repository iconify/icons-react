import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a072lo8qz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a072lo8qz"/>`,
		"fallback": "game-icons:horseshoe",
	});
}

export default Component;
