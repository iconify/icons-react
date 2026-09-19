import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x1tp2t4qr.css';

const viewBox = {"width":35,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x1tp2t4qr"/>`,
		"fallback": "fontisto:cloudy-gusts",
	});
}

export default Component;
