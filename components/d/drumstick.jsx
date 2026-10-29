import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/y9afhtbgn.css';
import '../../css/d/da6e_swis.css';
import '../../css/z/zdp7ykvuu.css';
import '../../css/s/skhu-cc9n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-k y9afhtbgn"/><path class="da6e_swis wm-a"/><path class="zdp7ykvuu"/><path class="skhu-cc9n"/></g>`,
		"fallback": "withicons-bauhaus:drumstick",
	});
}

export default Component;
