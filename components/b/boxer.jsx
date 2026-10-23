import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wau85hb9w.css';
import '../../css/k/kgjpp5aah.css';
import '../../css/g/gpxbt74vt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="wau85hb9w"/><path class="kgjpp5aah"/><path class="gpxbt74vt"/></g>`,
		"fallback": "andrsrxn:boxer",
	});
}

export default Component;
