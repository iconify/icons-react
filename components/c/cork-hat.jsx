import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tz2_bykhj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tz2_bykhj"/>`,
		"fallback": "game-icons:cork-hat",
	});
}

export default Component;
