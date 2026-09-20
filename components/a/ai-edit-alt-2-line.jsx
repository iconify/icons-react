import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jzho85dns.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jzho85dns"/>`,
		"fallback": "si:ai-edit-alt-2-line",
	});
}

export default Component;
