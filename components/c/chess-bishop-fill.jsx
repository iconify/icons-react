import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kqxr__w0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kqxr__w0m"/>`,
		"fallback": "mingcute:chess-bishop-fill",
	});
}

export default Component;
