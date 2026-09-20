import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gmt_-3gzv.css';
import '../../css/l/l-3emlabv.css';
import '../../css/u/uv73q-b-l.css';
import '../../css/y/ypernbbma.css';
import '../../css/c/cg0iy4byq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gmt_-3gzv"/><path class="l-3emlabv"/><path class="uv73q-b-l"/><path class="ypernbbma"/><path class="cg0iy4byq"/>`,
		"fallback": "selfhst:automatic1111",
	});
}

export default Component;
