import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lrttn8byy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lrttn8byy"/>`,
		"fallback": "mingcute:beef-off-fill",
	});
}

export default Component;
