import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pp1n6kbii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pp1n6kbii"/>`,
		"fallback": "mdi:checkbox-blank-off",
	});
}

export default Component;
