import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y4eff8ryr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y4eff8ryr"/>`,
		"fallback": "iconamoon:funnel-thin",
	});
}

export default Component;
