import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ej_yigban.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ej_yigban"/>`,
		"fallback": "boxicons:home-alt-2-filled",
	});
}

export default Component;
