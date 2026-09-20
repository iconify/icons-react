import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xra610bcb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xra610bcb"/>`,
		"fallback": "simple-icons:i18next",
	});
}

export default Component;
