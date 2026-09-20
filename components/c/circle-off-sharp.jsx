import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p5h7piywn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p5h7piywn"/>`,
		"fallback": "keyline-icons:circle-off-sharp",
	});
}

export default Component;
