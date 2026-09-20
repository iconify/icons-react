import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xiwjijb7l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xiwjijb7l"/>`,
		"fallback": "keyline-icons:bracket-arrow-left",
	});
}

export default Component;
