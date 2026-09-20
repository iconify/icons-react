import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vagd1bbnm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vagd1bbnm"/>`,
		"fallback": "tdesign:bill-filled",
	});
}

export default Component;
