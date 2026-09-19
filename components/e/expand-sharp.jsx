import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7_g84b3l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x7_g84b3l"/>`,
		"fallback": "ion:expand-sharp",
	});
}

export default Component;
