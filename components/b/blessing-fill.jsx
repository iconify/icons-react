import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bh96-wwdj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bh96-wwdj"/>`,
		"fallback": "mingcute:blessing-fill",
	});
}

export default Component;
