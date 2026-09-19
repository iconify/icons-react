import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/ve0ln5b7t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ve0ln5b7t"/>`,
		"fallback": "game-icons:direwolf",
	});
}

export default Component;
