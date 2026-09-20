import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx4o6tq-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jx4o6tq-j"/>`,
		"fallback": "keyline-icons:car-sharp",
	});
}

export default Component;
