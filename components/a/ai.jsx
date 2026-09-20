import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qkuc_0t8m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qkuc_0t8m"/>`,
		"fallback": "tabler:ai",
	});
}

export default Component;
