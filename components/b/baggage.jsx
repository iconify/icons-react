import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/y/ykj-wob0o.css';
import '../../css/o/og7xrbchw.css';
import '../../css/t/t82qxkb8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="ykj-wob0o"/><path class="og7xrbchw"/><path class="t82qxkb8c"/></g>`,
		"fallback": "streamline-sharp-color:baggage",
	});
}

export default Component;
