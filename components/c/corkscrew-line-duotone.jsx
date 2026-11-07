import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/kw3bng7qz.css';
import '../../css/q/q6dyi4r6d.css';
import '../../css/o/o-y-5acxr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="kw3bng7qz"/><path class="q6dyi4r6d"/><path class="o-y-5acxr"/></g>`,
		"fallback": "solar:corkscrew-line-duotone",
	});
}

export default Component;
