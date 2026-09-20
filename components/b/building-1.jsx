import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/ralzz_bza.css';
import '../../css/o/oi8iyebza.css';
import '../../css/p/p9-j6ywuc.css';
import '../../css/f/fkeuwj0bk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ralzz_bza"/><path clip-rule="evenodd" class="oi8iyebza"/><path class="p9-j6ywuc"/><path class="fkeuwj0bk"/></g>`,
		"fallback": "streamline-flex-color:building-1",
	});
}

export default Component;
