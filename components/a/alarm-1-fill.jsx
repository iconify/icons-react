import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x42to7j3g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x42to7j3g"/>`,
		"fallback": "mingcute:alarm-1-fill",
	});
}

export default Component;
