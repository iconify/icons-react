import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ozvhalb7a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ozvhalb7a"/>`,
		"fallback": "lucide:cross",
	});
}

export default Component;
