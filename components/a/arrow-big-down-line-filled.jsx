import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oni2mrusm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oni2mrusm"/>`,
		"fallback": "tabler:arrow-big-down-line-filled",
	});
}

export default Component;
