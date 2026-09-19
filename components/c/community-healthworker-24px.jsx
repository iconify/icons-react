import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l97ph9b-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l97ph9b-n"/>`,
		"fallback": "healthicons:community-healthworker-24px",
	});
}

export default Component;
