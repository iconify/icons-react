import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tt5qeccgw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tt5qeccgw"/>`,
		"fallback": "mingcute:delete-3-line",
	});
}

export default Component;
