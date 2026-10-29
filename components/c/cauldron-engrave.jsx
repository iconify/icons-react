import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/a92_7somy.css';
import '../../css/k/kznvhlblq.css';
import '../../css/z/z_x2gbneb.css';
import '../../css/n/nlzmg1ubk.css';
import '../../css/j/jj9hj585s.css';
import '../../css/p/p54t-9u0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="a92_7somy wm-k"/><path class="kznvhlblq wm-s"/><path class="wm-shadow z_x2gbneb"/><path class="nlzmg1ubk wm-k"/><path class="jj9hj585s wm-k"/><path class="p54t-9u0q wm-s"/></g>`,
		"fallback": "withicons:cauldron-engrave",
	});
}

export default Component;
