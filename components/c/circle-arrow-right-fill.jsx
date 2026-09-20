import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x0n3fkbwg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x0n3fkbwg"/>`,
		"fallback": "keyline-icons:circle-arrow-right-fill",
	});
}

export default Component;
