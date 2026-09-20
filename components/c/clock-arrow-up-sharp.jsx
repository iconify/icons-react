import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtiq49-zo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jtiq49-zo"/>`,
		"fallback": "keyline-icons:clock-arrow-up-sharp",
	});
}

export default Component;
