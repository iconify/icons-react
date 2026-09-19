import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oiao0hb6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oiao0hb6d"/>`,
		"fallback": "fontisto:battery-full",
	});
}

export default Component;
