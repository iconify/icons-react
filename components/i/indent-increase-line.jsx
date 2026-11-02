import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zeq25k99a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zeq25k99a"/>`,
		"fallback": "mingcute:indent-increase-line",
	});
}

export default Component;
