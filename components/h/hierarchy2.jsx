import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l2c8r3w-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l2c8r3w-d"/>`,
		"fallback": "reicon:hierarchy2",
	});
}

export default Component;
