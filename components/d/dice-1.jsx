import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ags-gkbzx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ags-gkbzx"/>`,
		"fallback": "mdi:dice-1",
	});
}

export default Component;
