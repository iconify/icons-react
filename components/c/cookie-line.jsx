import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/burq9xbdf.css';
import '../../css/v/vjz9f7byi.css';
import '../../css/z/zt0bu9e2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="burq9xbdf"/><path class="vjz9f7byi"/><path class="zt0bu9e2z"/>`,
		"fallback": "mingcute:cookie-line",
	});
}

export default Component;
