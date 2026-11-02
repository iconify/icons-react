import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xseahqb1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xseahqb1l"/>`,
		"fallback": "mingcute:broom-fill",
	});
}

export default Component;
