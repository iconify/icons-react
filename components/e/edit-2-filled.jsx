import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q3eym7b9h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q3eym7b9h"/>`,
		"fallback": "tdesign:edit-2-filled",
	});
}

export default Component;
