import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vyzwm3lxg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vyzwm3lxg"/>`,
		"fallback": "iconamoon:compare-light",
	});
}

export default Component;
