import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gc4vjukdb.css';
import '../../css/u/upj-l8mwq.css';
import '../../css/s/sr0w_1k5f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gc4vjukdb"/><path class="upj-l8mwq"/><path class="sr0w_1k5f"/>`,
		"fallback": "fxemoji:chilipepper",
	});
}

export default Component;
