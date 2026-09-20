import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dqzn08bcs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dqzn08bcs"/>`,
		"fallback": "tabler:briefcase-2-filled",
	});
}

export default Component;
