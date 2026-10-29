import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d_djld5do.css';
import '../../css/z/zw3_wr57r.css';
import '../../css/e/e2vl61blx.css';
import '../../css/q/qkm519b6x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d_djld5do wm-k"/><path class="wm-k zw3_wr57r"/><path class="e2vl61blx wm-a"/><path class="qkm519b6x wm-k"/>`,
		"fallback": "withicons-bauhaus:flask-conical",
	});
}

export default Component;
