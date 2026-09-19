import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ra32g-kfq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ra32g-kfq"/>`,
		"fallback": "game-icons:body-height",
	});
}

export default Component;
