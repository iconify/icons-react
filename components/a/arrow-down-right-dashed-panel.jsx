import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l2w919zsd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l2w919zsd"/>`,
		"fallback": "keyline-icons:arrow-down-right-dashed-panel",
	});
}

export default Component;
