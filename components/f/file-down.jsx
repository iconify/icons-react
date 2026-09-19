import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/ykzxdyblb.css';
import '../../css/u/u1pv1bcpd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ykzxdyblb"/><path class="u1pv1bcpd"/></g>`,
		"fallback": "hugeicons:file-down",
	});
}

export default Component;
