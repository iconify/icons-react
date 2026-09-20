import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4z83bxpp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g4z83bxpp"/>`,
		"fallback": "tdesign:bookmark-minus",
	});
}

export default Component;
