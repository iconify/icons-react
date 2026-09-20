import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gdk1bkb4m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gdk1bkb4m"/>`,
		"fallback": "simple-icons:alliedmodders",
	});
}

export default Component;
