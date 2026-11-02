import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s74ucqtbn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s74ucqtbn"/>`,
		"fallback": "mingcute:arrows-up-fill",
	});
}

export default Component;
