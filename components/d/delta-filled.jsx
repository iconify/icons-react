import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hw_k-4pjf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hw_k-4pjf"/>`,
		"fallback": "tdesign:delta-filled",
	});
}

export default Component;
