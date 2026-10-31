import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/l/lbha9ecwq.css';
import '../../css/v/v67rwzb7l.css';
import '../../css/k/kw04ru5zn.css';
import '../../css/u/urmv84b7a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="lbha9ecwq wm-shadow"/><path class="v67rwzb7l wm-shadow"/><path class="kw04ru5zn"/><path class="urmv84b7a"/></g>`,
		"fallback": "withicons-brutal:gauge",
	});
}

export default Component;
