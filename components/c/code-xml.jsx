import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/h/hvyxv8hfx.css';
import '../../css/a/acrycrbka.css';
import '../../css/n/n0az6mbrq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="hvyxv8hfx wm-shadow"/><path class="acrycrbka wm-shadow"/><path class="n0az6mbrq"/></g>`,
		"fallback": "withicons-brutal:code-xml",
	});
}

export default Component;
