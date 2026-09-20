import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h0sch-y5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h0sch-y5f"/>`,
		"fallback": "mingcute:group-fill",
	});
}

export default Component;
