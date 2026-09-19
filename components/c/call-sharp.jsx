import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l22z55e_z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l22z55e_z"/>`,
		"fallback": "ion:call-sharp",
	});
}

export default Component;
