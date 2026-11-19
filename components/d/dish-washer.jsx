import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vxnlivbfp.css';
import '../../css/k/kicuifboc.css';
import '../../css/w/wvx5iqbpd.css';
import '../../css/b/bi5tad37q.css';
import '../../css/d/dnnjksbak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="vxnlivbfp"/><path class="kicuifboc"/><circle class="wvx5iqbpd"/><path class="bi5tad37q"/><path class="dnnjksbak"/></g>`,
		"fallback": "andrsrxn:dish-washer",
	});
}

export default Component;
