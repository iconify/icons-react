import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t3t04tbfy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t3t04tbfy"/>`,
		"fallback": "noviair-light:air-conditioner-check",
	});
}

export default Component;
