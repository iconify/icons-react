import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p29rlk6yb.css';
import '../../css/y/ycfgvb0tf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p29rlk6yb"/><path class="ycfgvb0tf"/></g>`,
		"fallback": "andrsrxn:inhaler",
	});
}

export default Component;
