import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adm28hbce.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="adm28hbce"/>`,
		"fallback": "tabler:crop-landscape",
	});
}

export default Component;
