import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mygkryb2r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mygkryb2r"/>`,
		"fallback": "coolicons:eye-off-round",
	});
}

export default Component;
