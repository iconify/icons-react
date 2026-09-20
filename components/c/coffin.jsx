import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dvd6fwb9u.css';
import '../../css/b/bkxve54zr.css';
import '../../css/s/sr_chs9kp.css';
import '../../css/v/vs-rjtnnd.css';
import '../../css/f/f7dlnxybq.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dvd6fwb9u"><path class="bkxve54zr"/><path class="sr_chs9kp"/><path class="vs-rjtnnd"/></g><path class="f7dlnxybq"/>`,
		"fallback": "openmoji:coffin",
	});
}

export default Component;
