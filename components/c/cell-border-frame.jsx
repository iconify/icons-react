import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dpz99yx7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dpz99yx7n"/>`,
		"fallback": "streamline-ultimate:cell-border-frame",
	});
}

export default Component;
