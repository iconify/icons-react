import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kswr0cbty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kswr0cbty"/>`,
		"fallback": "boxicons:alarm-plus-filled",
	});
}

export default Component;
