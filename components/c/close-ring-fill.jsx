import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lioq-n8vk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lioq-n8vk"/>`,
		"fallback": "lets-icons:close-ring-fill",
	});
}

export default Component;
