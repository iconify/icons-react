import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ax9-xtuce.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ax9-xtuce"/>`,
		"fallback": "mingcute:bandage-fill",
	});
}

export default Component;
