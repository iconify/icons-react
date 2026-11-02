import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gfnj6gb3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gfnj6gb3m"/>`,
		"fallback": "mingcute:drum-fill",
	});
}

export default Component;
