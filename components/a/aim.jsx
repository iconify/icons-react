import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ow134470u.css';

const viewBox = {"width":368,"height":488};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ow134470u"/>`,
		"fallback": "ps:aim",
	});
}

export default Component;
