import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q0a7rtval.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q0a7rtval"/>`,
		"fallback": "keyline-icons:bracket-arrow-down-sharp-fill",
	});
}

export default Component;
