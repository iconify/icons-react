import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v74ll-bni.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v74ll-bni"/>`,
		"fallback": "game-icons:barbed-star",
	});
}

export default Component;
