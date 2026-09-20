import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-x4ojbyc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-x4ojbyc"/>`,
		"fallback": "keyline-icons:clock-arrow-down-sharp",
	});
}

export default Component;
