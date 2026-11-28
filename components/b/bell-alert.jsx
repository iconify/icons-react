import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bdb7o4m6l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bdb7o4m6l"/>`,
		"fallback": "noviair:bell-alert",
	});
}

export default Component;
