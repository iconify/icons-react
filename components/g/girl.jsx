import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l2c1ccccv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l2c1ccccv"/>`,
		"fallback": "ps:girl",
	});
}

export default Component;
