import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/ga2q64z-s.css';
import '../../css/w/wb6erxftq.css';
import '../../css/h/h-gcrrbsm.css';
import '../../css/c/c3me1jime.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ga2q64z-s"/><path class="wb6erxftq"/><path class="h-gcrrbsm"/><path class="c3me1jime"/></g>`,
		"fallback": "streamline-flex-color:home-2",
	});
}

export default Component;
