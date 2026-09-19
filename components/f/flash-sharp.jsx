import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s-lo8vbld.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s-lo8vbld"/>`,
		"fallback": "ion:flash-sharp",
	});
}

export default Component;
