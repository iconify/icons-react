import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qfbuu8bri.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qfbuu8bri"/>`,
		"fallback": "thesvg:coca-cola",
	});
}

export default Component;
