import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dmg3osppk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dmg3osppk"/>`,
		"fallback": "noviair:fridge-alert",
	});
}

export default Component;
