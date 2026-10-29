import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/ok2h6kb5u.css';
import '../../css/k/kctmd-b-w.css';
import '../../css/b/bvody_b8k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ok2h6kb5u"/><path class="kctmd-b-w wm-k"/><path class="bvody_b8k wm-a"/></g>`,
		"fallback": "withicons:cpu-sketch",
	});
}

export default Component;
