import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c61g_vb5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c61g_vb5n"/>`,
		"fallback": "iconamoon:arrow-bottom-right-1",
	});
}

export default Component;
