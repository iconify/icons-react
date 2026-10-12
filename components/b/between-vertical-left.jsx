import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wcske0ocb.css';
import '../../css/b/b2wzjm0mk.css';
import '../../css/r/rqco8lbxi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 21.27 10)" class="wcske0ocb"/><rect transform="rotate(90 0 21.27)scale(-1 1)" class="wcske0ocb"/><rect transform="matrix(0 -1 -1 0 21.27 10)" class="b2wzjm0mk"/><rect transform="rotate(90 0 21.27)scale(-1 1)" class="b2wzjm0mk"/><path class="rqco8lbxi"/></g>`,
		"fallback": "andrsrxn:between-vertical-left",
	});
}

export default Component;
