import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/d/db3s0pkqj.css';
import '../../css/y/y5n3hob1b.css';
import '../../css/h/hy2zznx0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="db3s0pkqj"/><path class="y5n3hob1b"/><path class="hy2zznx0i"/></g>`,
		"fallback": "streamline-sharp-color:bag-dollar",
	});
}

export default Component;
