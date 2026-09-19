import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ue0-uhiwe.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ue0-uhiwe"/>`,
		"fallback": "game-icons:high-punch",
	});
}

export default Component;
