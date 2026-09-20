import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ms5l_luvw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ms5l_luvw"/>`,
		"fallback": "mingcute:forward-2-line",
	});
}

export default Component;
