import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z-cnb6b6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z-cnb6b6i"/>`,
		"fallback": "proicons:flag",
	});
}

export default Component;
