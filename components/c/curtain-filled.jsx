import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ds42oz0-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ds42oz0-v"/>`,
		"fallback": "tdesign:curtain-filled",
	});
}

export default Component;
