import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/itn0mccsx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="itn0mccsx"/>`,
		"fallback": "solar:flag-bold",
	});
}

export default Component;
