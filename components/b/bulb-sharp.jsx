import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dhezqac2l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dhezqac2l"/>`,
		"fallback": "ion:bulb-sharp",
	});
}

export default Component;
