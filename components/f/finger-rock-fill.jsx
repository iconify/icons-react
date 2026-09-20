import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b6erbx_3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b6erbx_3d"/>`,
		"fallback": "mingcute:finger-rock-fill",
	});
}

export default Component;
