import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oly-ng79r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oly-ng79r"/>`,
		"fallback": "token:apm",
	});
}

export default Component;
