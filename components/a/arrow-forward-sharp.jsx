import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h6ec_n6vv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h6ec_n6vv"/>`,
		"fallback": "ion:arrow-forward-sharp",
	});
}

export default Component;
