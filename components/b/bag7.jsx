import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/efmaas25o.css';
import '../../css/q/qq0qwkbww.css';
import '../../css/l/la2k6ib8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="efmaas25o"/><path class="qq0qwkbww"/><path class="la2k6ib8a"/></g>`,
		"fallback": "reicon:bag7",
	});
}

export default Component;
