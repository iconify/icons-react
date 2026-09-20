import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/yk_gpwgpn.css';
import '../../css/j/j_1ffwt8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="yk_gpwgpn"/><path class="j_1ffwt8y"/></g>`,
		"fallback": "streamline-sharp-color:eco-house-flat",
	});
}

export default Component;
