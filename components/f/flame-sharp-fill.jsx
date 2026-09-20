import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lnl5zpbem.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lnl5zpbem"/>`,
		"fallback": "keyline-icons:flame-sharp-fill",
	});
}

export default Component;
