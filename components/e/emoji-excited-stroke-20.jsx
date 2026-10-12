import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u5dk3pbjk.css';
import '../../css/j/jpdmwmb0j.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u5dk3pbjk"/><path class="jpdmwmb0j"/>`,
		"fallback": "garden:emoji-excited-stroke-20",
	});
}

export default Component;
