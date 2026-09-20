import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b29sb_hun.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b29sb_hun"/>`,
		"fallback": "mingcute:air-condition-open-fill",
	});
}

export default Component;
