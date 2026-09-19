import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jq0hqej1b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jq0hqej1b"/>`,
		"fallback": "game-icons:barbed-spear",
	});
}

export default Component;
