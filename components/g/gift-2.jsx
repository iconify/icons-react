import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xzeuhbb4c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xzeuhbb4c"/>`,
		"fallback": "streamline-sharp:gift-2",
	});
}

export default Component;
