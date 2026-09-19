import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn-vlsb9d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xn-vlsb9d"/>`,
		"fallback": "ion:ban-sharp",
	});
}

export default Component;
