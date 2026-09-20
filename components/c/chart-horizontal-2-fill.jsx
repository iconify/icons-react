import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hswj1gb4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hswj1gb4y"/>`,
		"fallback": "mingcute:chart-horizontal-2-fill",
	});
}

export default Component;
