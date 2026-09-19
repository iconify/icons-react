import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fff_8kfsb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fff_8kfsb"/>`,
		"fallback": "cbi:flow",
	});
}

export default Component;
