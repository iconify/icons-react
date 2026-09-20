import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/waq7ozb7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="waq7ozb7u"/>`,
		"fallback": "tdesign:edit-filled",
	});
}

export default Component;
