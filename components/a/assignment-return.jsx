import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zbn6v21yc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zbn6v21yc"/>`,
		"fallback": "mdi:assignment-return",
	});
}

export default Component;
