import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dlrh10o5i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dlrh10o5i"/>`,
		"fallback": "game-icons:button-finger",
	});
}

export default Component;
