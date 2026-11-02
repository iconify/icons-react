import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gsakyebtq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gsakyebtq"/>`,
		"fallback": "mingcute:circle-check-big-line",
	});
}

export default Component;
