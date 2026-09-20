import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r2is6ybzb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r2is6ybzb"/>`,
		"fallback": "keyline-icons:airplay",
	});
}

export default Component;
