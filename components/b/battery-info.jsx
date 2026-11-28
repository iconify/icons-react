import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/detc2mw0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="detc2mw0t"/>`,
		"fallback": "noviair:battery-info",
	});
}

export default Component;
