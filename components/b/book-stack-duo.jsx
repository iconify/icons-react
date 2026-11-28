import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uyimqfbdf.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/p514r1kdi.css';
import '../../css/w/we76hrb5m.css';
import '../../css/b/br-iwyzus.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary uyimqfbdf"/><g class="dt0cm9dhy primary"><path class="p514r1kdi"/><path class="we76hrb5m"/><path class="br-iwyzus"/></g>`,
		"fallback": "iconaut:book-stack-duo",
	});
}

export default Component;
