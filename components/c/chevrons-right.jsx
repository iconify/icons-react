import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6n7epy-m.css';
import '../../css/m/mexmngaav.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z6n7epy-m"/><path class="mexmngaav"/>`,
		"fallback": "bx:chevrons-right",
	});
}

export default Component;
