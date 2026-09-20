import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/djun2xb5d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="djun2xb5d"/>`,
		"fallback": "uil:celsius",
	});
}

export default Component;
