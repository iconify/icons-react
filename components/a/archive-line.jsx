import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wsl_kkb9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wsl_kkb9r"/>`,
		"fallback": "si:archive-line",
	});
}

export default Component;
