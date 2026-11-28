import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hyglkvb0z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hyglkvb0z primary"/>`,
		"fallback": "iconaut:asterisk-duotone",
	});
}

export default Component;
