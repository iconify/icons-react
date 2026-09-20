import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qdo_ykkcl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qdo_ykkcl"/>`,
		"fallback": "tabler:arrow-badge-right",
	});
}

export default Component;
