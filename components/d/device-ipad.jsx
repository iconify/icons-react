import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3nd6zn0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l3nd6zn0m"/>`,
		"fallback": "tabler:device-ipad",
	});
}

export default Component;
