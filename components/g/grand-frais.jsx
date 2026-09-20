import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lfg7h4bnt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lfg7h4bnt"/>`,
		"fallback": "thesvg-color:grand-frais",
	});
}

export default Component;
