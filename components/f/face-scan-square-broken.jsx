import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/s/so69kfbvn.css';
import '../../css/q/qaz3lvb_a.css';
import '../../css/e/etjnuzbeh.css';
import '../../css/j/jzbgmtzzc.css';
import '../../css/s/shnnyvbiu.css';
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
		"content": `<g class="pr52f_b5y"><path class="so69kfbvn"/><path class="qaz3lvb_a"/><path class="etjnuzbeh"/><path class="jzbgmtzzc"/><path class="shnnyvbiu"/><path class="wbw_ixbrw"/><ellipse class="yad62e0rw"/></g>`,
		"fallback": "solar:face-scan-square-broken",
	});
}

export default Component;
