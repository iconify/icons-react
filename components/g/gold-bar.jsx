import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uc1h4-8rm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uc1h4-8rm"/>`,
		"fallback": "game-icons:gold-bar",
	});
}

export default Component;
