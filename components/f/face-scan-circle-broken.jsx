import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/s/so69kfbvn.css';
import '../../css/x/xxle25b4v.css';
import '../../css/y/y1e06ebnb.css';
import '../../css/n/nksxc6bkm.css';
import '../../css/a/aut1f7qcz.css';
import '../../css/w/wbw_ixbrw.css';
import '../../css/y/yad62e0rw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="so69kfbvn"/><path class="xxle25b4v"/><path class="y1e06ebnb"/><path class="nksxc6bkm"/><path class="aut1f7qcz"/><path class="wbw_ixbrw"/><ellipse class="yad62e0rw"/></g>`,
		"fallback": "solar:face-scan-circle-broken",
	});
}

export default Component;
