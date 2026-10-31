import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/v/vqud2ryyv.css';
import '../../css/t/tvg7l_byo.css';
import '../../css/v/vza98ebat.css';
import '../../css/x/xq269nwym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="vqud2ryyv wm-shadow"/><path class="tvg7l_byo wm-shadow"/><path class="vza98ebat"/><path class="xq269nwym"/></g>`,
		"fallback": "withicons-brutal:activity",
	});
}

export default Component;
