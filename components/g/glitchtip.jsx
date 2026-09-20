import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ar_qvpb7x.css';
import '../../css/d/dv69d-bmz.css';
import '../../css/a/a4u2qpzio.css';
import '../../css/k/kow065bvm.css';
import '../../css/n/n0jxcnbpb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ar_qvpb7x"/><path class="dv69d-bmz"/><path class="a4u2qpzio"/><path class="kow065bvm"/><path class="n0jxcnbpb"/>`,
		"fallback": "selfhst:glitchtip",
	});
}

export default Component;
