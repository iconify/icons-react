import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/n/nrjtpb7yp.css';
import '../../css/x/xg-dvzv6r.css';
import '../../css/r/rs-d_y_0o.css';
import '../../css/l/ldpeo3bzf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="nrjtpb7yp"/><circle class="xg-dvzv6r"/><circle class="rs-d_y_0o"/><circle class="ldpeo3bzf"/></g>`,
		"fallback": "lets-icons:filter",
	});
}

export default Component;
