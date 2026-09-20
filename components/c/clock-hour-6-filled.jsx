import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e9cqabcqx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e9cqabcqx"/>`,
		"fallback": "tabler:clock-hour-6-filled",
	});
}

export default Component;
