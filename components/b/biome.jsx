import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/icath84yd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="icath84yd"/>`,
		"fallback": "thesvg-color:biome",
	});
}

export default Component;
