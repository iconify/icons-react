import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-oypdbxk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-oypdbxk"/>`,
		"fallback": "tabler:device-ipad-bolt",
	});
}

export default Component;
