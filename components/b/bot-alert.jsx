import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/waeyn_hha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="waeyn_hha"/>`,
		"fallback": "noviair:bot-alert",
	});
}

export default Component;
