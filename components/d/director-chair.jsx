import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/g/gup7oq7qr.css';
import '../../css/r/rw6k9xbxi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="gup7oq7qr"/><path class="rw6k9xbxi"/></g>`,
		"fallback": "iconoir:director-chair",
	});
}

export default Component;
