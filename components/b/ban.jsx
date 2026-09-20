import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ieldk2lpf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ieldk2lpf"/>`,
		"fallback": "tabler:ban",
	});
}

export default Component;
