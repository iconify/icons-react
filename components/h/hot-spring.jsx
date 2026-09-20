import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/j/j-_ygwlfo.css';
import '../../css/d/dltjwv3ty.css';
import '../../css/v/vrdie104n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="j-_ygwlfo"/><path class="dltjwv3ty"/><path class="vrdie104n"/></g>`,
		"fallback": "streamline-sharp-color:hot-spring",
	});
}

export default Component;
