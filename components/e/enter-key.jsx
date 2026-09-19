import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/i/i0q8xwbhg.css';
import '../../css/m/mkm5kmzrf.css';
import '../../css/f/fd1m2zv8c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="i0q8xwbhg"/><path class="mkm5kmzrf"/><path class="fd1m2zv8c"/></g>`,
		"fallback": "icon-park:enter-key",
	});
}

export default Component;
