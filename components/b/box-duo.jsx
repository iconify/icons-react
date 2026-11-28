import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l864zbosp.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/swm41ebxd.css';
import '../../css/r/rwtn5mbuu.css';
import '../../css/z/z8leietho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l864zbosp secondary"/><g class="dt0cm9dhy primary"><path class="swm41ebxd"/><path class="rwtn5mbuu"/><path class="z8leietho"/></g>`,
		"fallback": "iconaut:box-duo",
	});
}

export default Component;
