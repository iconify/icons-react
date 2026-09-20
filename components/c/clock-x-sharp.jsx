import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lc7n59pdi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lc7n59pdi"/>`,
		"fallback": "keyline-icons:clock-x-sharp",
	});
}

export default Component;
