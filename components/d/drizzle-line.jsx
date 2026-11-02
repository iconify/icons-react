import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ztch4hb6x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ztch4hb6x"/>`,
		"fallback": "mingcute:drizzle-line",
	});
}

export default Component;
