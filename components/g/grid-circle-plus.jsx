import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eb9f_wazq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eb9f_wazq"/>`,
		"fallback": "boxicons:grid-circle-plus",
	});
}

export default Component;
