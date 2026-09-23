import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vkcakq44t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vkcakq44t"/>`,
		"fallback": "keyline-icons:arrow-big-up-dash-sharp",
	});
}

export default Component;
