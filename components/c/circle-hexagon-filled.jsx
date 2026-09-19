import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/crmgxgsvk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b crmgxgsvk"/>`,
		"fallback": "boxicons:circle-hexagon-filled",
	});
}

export default Component;
