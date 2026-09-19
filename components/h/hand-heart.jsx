import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/l7zb1yb5i.css';
import '../../css/p/p4ftfsbdr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="l7zb1yb5i"/><path class="p4ftfsbdr"/></g>`,
		"fallback": "hugeicons:hand-heart",
	});
}

export default Component;
