import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cq1xl-c-y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cq1xl-c-y"/>`,
		"fallback": "tabler:badge-sd-filled",
	});
}

export default Component;
