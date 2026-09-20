import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qem3v3brf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qem3v3brf"/>`,
		"fallback": "keyline-icons:arrow-down-wide-narrow-sharp-fill",
	});
}

export default Component;
