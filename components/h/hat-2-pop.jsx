import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f4yt4hbdq.css';
import '../../css/z/zlx947b8b.css';
import '../../css/t/tn4ehtdwu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f4yt4hbdq"/><path class="zlx947b8b"/><path class="tn4ehtdwu"/></g>`,
		"fallback": "streamline-kameleon-color:hat-2-pop",
	});
}

export default Component;
