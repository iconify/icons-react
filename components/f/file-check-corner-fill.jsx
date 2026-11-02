import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hz6x1qi_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hz6x1qi_i"/>`,
		"fallback": "mingcute:file-check-corner-fill",
	});
}

export default Component;
