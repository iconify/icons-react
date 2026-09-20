import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mn_23tb0g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mn_23tb0g"/>`,
		"fallback": "thesvg-color:fandom",
	});
}

export default Component;
