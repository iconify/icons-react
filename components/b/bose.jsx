import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n6032fbef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n6032fbef"/>`,
		"fallback": "thesvg:bose",
	});
}

export default Component;
