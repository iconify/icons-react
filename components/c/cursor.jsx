import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z0rtidb-e.css';
import '../../css/f/fh1vxnxeg.css';
import '../../css/s/s1s0bim7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-a z0rtidb-e"/><path class="fh1vxnxeg wm-k"/><path class="s1s0bim7b wm-k"/>`,
		"fallback": "withicons-bauhaus:cursor",
	});
}

export default Component;
