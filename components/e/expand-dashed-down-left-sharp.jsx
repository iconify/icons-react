import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hlvzzwmpm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hlvzzwmpm"/>`,
		"fallback": "keyline-icons:expand-dashed-down-left-sharp",
	});
}

export default Component;
