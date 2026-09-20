import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/s/so69kfbvn.css';
import '../../css/a/a_2unbc-t.css';
import '../../css/n/n0ouqcbgu.css';
import '../../css/m/m-qaz5lbt.css';
import '../../css/k/kd20b6_5n.css';
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
		"content": `<g class="pr52f_b5y"><path class="so69kfbvn"/><path class="a_2unbc-t"/><path class="n0ouqcbgu"/><path class="m-qaz5lbt"/><path class="kd20b6_5n"/><path class="wbw_ixbrw"/><ellipse class="yad62e0rw"/></g>`,
		"fallback": "solar:face-scan-circle-line-duotone",
	});
}

export default Component;
